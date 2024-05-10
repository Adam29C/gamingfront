import { configureStore } from "@reduxjs/toolkit";

//AUTH SLICE
import AuthSlice from "../Slice/Auth/auth.slice";

const store = configureStore({
  reducer: {
    AuthSlice: AuthSlice.reducer,
  },
});

export default store;
