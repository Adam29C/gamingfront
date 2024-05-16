import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserProfileGetApi } from "../../../Service/user.service";

export const getUserProfile = createAsyncThunk(
  "User/getUserProfile",
  async (data) => {

    try {
      let { id, token } = data;
      const res = await UserProfileGetApi(id, token);
      return await res;
     
    } catch (error) {}
  }
);

const UserSlice = createSlice({
  name: "UserSlice",
  initialState: {
    getUserProfileState: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserProfile.fulfilled, (state, action) => {
      state.getUserProfile = action.payload;
    });
  },
});


export default UserSlice;