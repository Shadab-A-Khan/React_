import { configureStore } from "@reduxjs/toolkit"; //will give us the store of our React Application
import cartSlice from "./cartSlice";

//we will add slices to this appStore
const appStore = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
export default appStore;
