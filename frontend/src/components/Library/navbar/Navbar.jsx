import React, { useState, useEffect } from "react";
import {  useSelector } from 'react-redux';
import "./navbar.css"
import {Link} from "react-router-dom"

function Navbar() {
    const cart = useSelector((state) => state.library.cartbook);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
      let count = 0;
      cart.forEach((item) => {
        count += item.qty;
      });
  
      setCartCount(count);
    }, [cart, cartCount]);
    return (
        <nav className="navbar">
            <Link to="/list-books">
            <div className="navbar__logo">
                <h2>MERN Shopping Cart</h2>
            </div>
                </Link>
                    <ul className="navbar__links">
                        <li>
                            <Link to="/stock-books" className="cart__link">
                            <i className="fas fa-shopping-cart"></i>
                            <span>
                                Cart
                                <span className="cartlogo__badge">{cartCount}</span>
                            </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/list-books">
                            Shop
                           </Link>
                        </li>
                </ul>
       </nav>
    )
}

export default Navbar
