import * as actionTypes from "./ActionTypes";


export const addToCart = (itemID) => {
    return {
      type: actionTypes.BOOK_Addtocart_REQUEST,
      payload: {
        id: itemID,
      },
    };
  };
  export const removeFromCart = (itemID) => {
    return {
      type: actionTypes.REMOVE_FROM_CART,
      payload: {
        id: itemID,
      },
    };
  };