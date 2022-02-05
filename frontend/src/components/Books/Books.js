import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBooks, deleteBook } from '../../redux/actions/books/bookActions';
import StockBooks from '../Library/stock/StockBooks';
import Loading from '../Loading/Loading';
import './Books.css'

const Books = ({ history }) => {
  //Fetch books
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  const bookslist = useSelector(state => state.booksList);
  const { books, loading } = bookslist;
  // End of fetch books

  //Delete book handler
  const handlerDeleteBook = id => {
    dispatch(deleteBook(id));
    history.push('/books');
  };
  return (
    <div>
      {loading && <Loading />}
      {books !== undefined && books.length === 0 ? (
        'No Books More.'
      ) : (
        <div className='row'>
          <div className='col'>
            <table className='table table-hover tableau'>
              <thead>
                <tr>
                  <th scope='col'>Author</th>
                  <th scope='col'>Book Name</th>
                  <th scope='col'>Delete</th>
                  <th scope='col'>Update</th>
                </tr>
              </thead>
              <tbody>
                {books &&
                  books.map(book => {
                    return (
                      <tr className='table-dark' key={book._id}>
                        <th scope='row'>{book.title}</th>
                        <td>{book.author}</td>
                        <td>
                          <i
                            onClick={() => handlerDeleteBook(book._id)}
                            className='fas fa-trash '
                            style={{ color: 'red', cursor: 'progress' }}></i>
                        </td>
                        <td>
                          <Link to={`/book/${book && book._id}`}>
                            <i
                              className='far fa-edit'
                              style={{
                                color: 'yellow',
                                cursor: 'progress',
                              }}></i>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <StockBooks />
    </div>
  );
};

export default Books;
