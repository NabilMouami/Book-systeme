import * as actionTypes from "../actions/ActionTypes";
import box from "../../Listdata"


const INITIAL_STATE = {
    books: box,
    cartbook: [{
      id: 14,
      image: "",
      title: "",
      autour: "",
      page: "",
      info: "",
      view: "",
      vote: "",
      qty: 0,
    }]
}
  

const bookReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.BOOK_Addtocart_REQUEST:
          // Great Item data from products array
          const item = state.books.find(
            (book) => book.id === action.payload.id
          );
          // Check if Item is in cart already
          const inCart = state.cartbook.find((item) =>
            item.id === action.payload.id ? true : false
          );
    
          return {
            ...state,
            cartbook: inCart
              ? state.cartbook.map((item) =>
                  item.id === action.payload.id
                    ? { ...item, qty: item.qty + 1 }
                    : item
                )
              : [...state.cartbook, { ...item, qty: 1 }],
          };
          case actionTypes.REMOVE_FROM_CART:
            return {
              ...state,
              cartbook: state.cartbook.filter((item) => item.id !== action.payload.id),
            };
      
      default:
        return state;
    }
  };
      
  export default bookReducer;


  
