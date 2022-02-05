import React from 'react'
import "./Navbar.css";
import { Link, useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/actions/users/userActions';


function Navbar() {
    const dispatch = useDispatch();

    const history = useHistory();
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;
  
    //logout handler
  
    const logoutHandler = () => {
      dispatch(logoutUser());
      history.push('/');
    };
    return (
        <div className='sidebar'>
          <nav>
              <ul>
              {userInfo ? ( 
              <>
                <li className='nav-item'>
                  <Link className='nav-link' to='/books'>
                    Books
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/addbook'>
                    Add book
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link className='nav-link' to='/users'>
                    Users
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    className='nav-link'
                    to='/login'
                    onClick={() => dispatch(logoutUser())}>
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                 <Link to="/"><li>Home</li></Link>
                 <Link to="/login"><li>Login</li></Link>
                  <Link to="/register"><li>Register</li></Link>
              </>
            )}
            {userInfo ? (
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle btn-dark'
                  data-toggle='dropdown'
                  href='/'
                  role='button'
                  aria-haspopup='true'
                  aria-expanded='false'>
                  {userInfo.name}
                </a>
                <div className='dropdown-menu'>
                  
                  <Link className='dropdown-item' to='/addbook'>
                    Add book
                  </Link>
                  <Link className='dropdown-item' to='/books'>
                    Books
                  </Link>

                  <div className='dropdown-divider'></div>
                  <button onClick={logoutHandler} className='dropdown-item'>
                    Logout
                  </button>
                </div>
              </li>
            ) : (
              ''
            )}
          
          <form className='form-inline my-2 my-lg-0'>
            <input
              className='form-control mr-sm-2'
              type='text'
              placeholder='Search'
            />
            <button className='btn btn-secondary my-2 my-sm-0' type='submit'>
              Search
            </button>
          </form>
              </ul>
          </nav>
            
        </div>
    )
}

export default Navbar;
