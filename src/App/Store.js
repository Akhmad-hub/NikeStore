import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

const Store = configureStore(
  {
    reducer: { cart: CartSlice },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default Store;
