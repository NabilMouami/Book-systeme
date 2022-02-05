import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import AddBook from './components/Books/AddBook';
import Books from './components/Books/Books';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import BookDetail from './components/Books/BookDetail';
import Users from './components/Users/Users';
import ListBooks from './components/Library/ListBooks';
import StockBooks from './components/Library/stock/StockBooks';



function App() {
  return (
       <Router>
         <div className='app'>
          <Navbar />

          <Switch>

             <Route exact path='/' component={Home} />
             <Route exact path='/register' component={Register} />
             <Route exact path='/login' component={Login} />
             <Route exact path='/addbook' component={AddBook} />
             <Route exact path='/books' component={Books} />
             <Route exact path='/user-update' component={UpdateProfile} />
             <Route exact path='/book/:id' component={BookDetail} />
             <Route exact path='/users' component={Users} />
             <Route exact path='/list-books' component={ListBooks} />
             <Route exact path='/stock-books' component={StockBooks} />
             





          </Switch>
         </div>
      </Router>
      

  );
}

export default App;
