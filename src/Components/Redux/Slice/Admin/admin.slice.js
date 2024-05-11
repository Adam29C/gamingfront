import { createSlice, createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import { ProfileGet } from "../../../Service/admin.service";



export const profileGetApi = createAsyncThunk("admin/profileGetApi", async (token) => {
    
    try {
        const res = await ProfileGet(token);
        return await res;
      } catch (err) {
        return err;
      }
  });



  
const AdminSlice = createSlice({
  name: "AdminSlice",
  initialState: {
    getProfile: [],
  },

  recuders: {},
  extraReducers: (builder) => {
    builder
      .addCase(profileGetApi.pending, (state, action) => {
        return { ...state, getProfile: [] };
      }).addCase(profileGetApi.fulfilled, (state, action) => {
   
        return { getProfile: action.payload };
      })
      .addCase(profileGetApi.rejected, (state, action) => {
        return { ...state, getProfile: [] };
      })

  },
});

export default AdminSlice;
