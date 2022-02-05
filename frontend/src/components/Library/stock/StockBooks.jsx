import React, { useState, useEffect } from "react";
import {  useDispatch,useSelector } from 'react-redux';
import "./stock.css"
import {Link} from "react-router-dom"
import {removeFromCart} from "../redux/actions/libraryActions"
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Navbar from "../navbar/Navbar";

function StockBooks() {
    const cart = useSelector((state) => state.library.cartbook);
    const dispatch = useDispatch();
    const remove = (id) => {
        dispatch(removeFromCart(id))
    }
    
    return (
       <>
        <Navbar />
        <div className='cartItem'>
            {cart.map((tera) => {
                return(
                    <div>
                            <img
                                className="cartItem__image"
                                src={tera.image}
                            />
                            <div className="cartItem__details">
                                <p className="details__desc">{tera.info}</p>
                                <p className="details__price">pages: {tera.page}</p>
                            </div>
                            <div className="cartItem__actions">
                                
                                <button onClick={() => remove(tera.id)}
                                className="actions__deleteItemBtn"
                                >
                                  <AiOutlineCloseCircle />
                                </button>
                            </div>
                         </div>
                );

            })}
            
        </div>
    </>
    )
}

export default StockBooks
