import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import "./ListBooks.css"
import box from "./Listdata"
import Navbar from './navbar/Navbar';
import { addToCart } from './redux/actions/libraryActions';
function ListBooks() {
    const dispatch = useDispatch();
    const add = (id) => {
        dispatch(addToCart(id))
    }

    const [readMore, setReadMore] = useState(false);


    return (
            <>
                <Navbar />
                <div className='list-books'>
                {box.map((tera) => {
                    return(
                        
                        <div className='box-container' key={tera.id}>
                            <div className='box'>
                            <img src={tera.image} alt={tera.autor} />
                            <div className='title'>
                                <h4>{tera.autor}</h4>
                                <span>pages: {tera.page}</span>
                            </div>
                                <p>
                                    {readMore ? tera.info : `${tera.info.substring(0, 200)}...`}
                                    <button onClick={() => setReadMore(!readMore)}>
                                        {readMore ? 'show less' : '  read more'}
                                    </button>
                                </p>
                                <button onClick={() => add(tera.id)}>add</button>
                            </div>
                        </div>
                    );

                })}
                    
                </div>
            </>
            )
}

export default ListBooks
