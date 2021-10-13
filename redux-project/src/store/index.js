import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter-slice";
import authSlice from "./auth-slice";

const store = configureStore({
  reducer: {
    counterState: counterSlice.reducer,
    authenticationState: authSlice.reducer,
  },
});

export default store;
