import { configureStore } from "@reduxjs/toolkit";

import AdminSlice from "../Slice/Admin/admin.slice";
import UserSlice from "../Slice/User/user.slice";

//AUTH SLICE
import AuthSlice from "../Slice/Auth/auth.slice";

const store = configureStore({
  reducer: {
    AuthSlice: AuthSlice.reducer,
    AdminSlice: AdminSlice.reducer,
    UserSlice : UserSlice.reducer
  },
});

export default store;
