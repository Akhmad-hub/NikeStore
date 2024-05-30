import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cartState: false,
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [], //[] ketika tidak menggunakan localStorage
  cartTotalAmount: 0,
  cartTotalQantity: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setClosedCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setAddItemToCart: (state, action) => {
      const itemsIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemsIndex >= 0) {
        state.cartItems[itemsIndex].cartQuantity++;
        toast.success(`Item Qty Increased`);
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);
        toast.success(`${action.payload.title} added to Cart`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    setRemoveItemFromCart: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = removeItem;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      toast.success(`${action.payload.title} removed From Cart`);
    },

    setIncreaseItemQTY: (state, action) => {
      const itemsIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemsIndex >= 0) {
        state.cartItems[itemsIndex].cartQuantity++;
        toast.success(`Item Qty Increased`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setDecreaseItemQTY: (state, action) => {
      const itemsIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemsIndex].cartQuantity > 1) {
        state.cartItems[itemsIndex].cartQuantity--;
        toast.success(`Item Qty Decrease`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setClearCartItems: (state) => {
      state.cartItems = [];
      toast.success(`Cart Cleared`);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setGetTotals: (state) => {
      let { totalAmount, totalQTY } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const totalPrice = price * cartQuantity;
          cartTotal.totalAmount += totalPrice;
          cartTotal.totalQTY += cartQuantity;
          
          return cartTotal
        },
        { totalAmount: 0, totalQTY: 0 }
      );
      state.cartTotalAmount = totalAmount;
      state.cartTotalQantity = totalQTY;
    },
  },
});

export const {
  setIncreaseItemQTY,
  setDecreaseItemQTY,
  setClearCartItems,
  setOpenCart,
  setClosedCart,
  setAddItemToCart,
  setGetTotals,
  setRemoveItemFromCart,
} = CartSlice.actions;

export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectTotalQTY = (state) => state.cart.cartTotalQantity;
export default CartSlice.reducer;
