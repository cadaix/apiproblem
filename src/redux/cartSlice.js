import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem('cart');
  if(cart){
    return JSON.parse(localStorage.getItem('cart'));
  }else{
    return [];
  }
};

const storeInLocalStorage = (data) => {
  localStorage.setItem('cart', JSON.stringify(data.length > 0 ? data : []));
};



const initialState = {
  carts : fetchFromLocalStorage(),
  itemCount : 0,
  totalamount : 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemCart = state.carts.find((item) => item.id === action.payload.id);

      if (isItemCart) {
        const tempCart = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            let tempQty = item.count + action.payload.quantity;
            let tempTotalPrice = tempQty * item.price;

            return {
              ...item,
              count: tempQty,
              totalPrice: tempTotalPrice,
            };
          } else {
            return item;
          }
        });
        state.carts = tempCart;
        storeInLocalStorage(state.carts);
      } else {
        state.carts.push(action.payload);
        storeInLocalStorage(state.carts);
      }
    },
    removeFromCart: (state, action) => {
      const tempCart = state.carts.filter((item) => item.id !== action.payload.id);
      state.carts = tempCart;
      storeInLocalStorage(state.carts);
    },
    clearCart: (state) => {
      state.carts = [];
      storeInLocalStorage(state.carts);
    },
    getCartTotal: (state) => {
      state.totalamount = state.carts.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.price);
      }, 0);
      state.itemCount = state.carts.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.count);
      }, 0);
    },
  },
});


export const {addToCart,removeFromCart,clearCart,getCartTotal} = cartSlice.actions;
export default cartSlice.reducer;
