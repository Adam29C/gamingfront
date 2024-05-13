import { configureStore } from "@reduxjs/toolkit";

import AdminSlice from "../Slice/Admin/admin.slice";

//AUTH SLICE
import AuthSlice from "../Slice/Auth/auth.slice";

const store = configureStore({
  reducer: {
    AuthSlice: AuthSlice.reducer,
    AdminSlice: AdminSlice.reducer,
  },
});

export default store;
