import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/actions/users/userActions';
import ErrorMessage from '../DisplayMessage/ErrorMessage';
import Loading from '../Loading/Loading';
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  //Before login in we will check if you have login the we redirect you

  const userLoginDetails = useSelector(state => state.userLogin);

  const { loading, userInfo, error } = userLoginDetails;
  console.log(loading, userInfo, error);

  //submit form
  const submitFormHandler = e => {
    e.preventDefault();
    dispatch(loginUser(email, password));
    console.log(email, password);
  };

  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
          {loading && <Loading />}
          {error && <ErrorMessage error={error} />}
          <h1 className='text-center'>Login</h1>
          <form onSubmit={submitFormHandler}>
            <fieldset>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Email address</label>
                <input
                  value={email}
                  onChange={e => setemail(e.target.value)}
                  type='email'
                  className='form-control ccc'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>Password</label>
                <input
                  value={password}
                  onChange={e => setpassword(e.target.value)}
                  type='password'
                  className='form-control ccc'
                  id='exampleInputPassword1'
                  placeholder='Password'
                />
              </div>
              <button type='submit' className='btn btn-info m-auto'>
                Login
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
