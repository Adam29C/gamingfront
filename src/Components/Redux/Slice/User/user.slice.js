import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  AllMatchesApi,
  MatchListApi,
  SeriesListApi,
  UserProfileGetApi,
} from "../../../Service/user.service";
// import { useNavigate } from "react-router-dom";

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

export const getAllMatches = createAsyncThunk(
  "user/getAllMatches",
  async (token) => {
    try {
      const res = await AllMatchesApi(token);

      return await res;
    } catch (error) {
      return error;
    }
  }
);

export const getMatchList = createAsyncThunk(
  "user/getMatchList",
  async (data) => {
    console.log(data, "check data in matchlist");
    try {
      // const res = await MatchListApi(data)
      // return await res
    } catch (error) {
      return error;
    }
  }
);

export const getSeriesList = createAsyncThunk(
  "user/getSeriesList",
  async (token) => {
    // const navigate = useNavigate();

    try {
      const res = await SeriesListApi(token);

      console.log("res", res);

      return res;
    } catch (error) {
      console.log("error", error);

      // if (error.response && error.response.status === 500) {
      //   navigate("/login"); // Replace '/error500' with your desired route
      // }

      throw error; // Rethrow the error to let Redux Toolkit know that the action has failed
    }
  }
);

const UserSlice = createSlice({
  name: "UserSlice",
  initialState: {
    getUserProfileState: {},
    getAllMatchListState: [],
    getMatchListState: [],
    getSeriesListState: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserProfile.fulfilled, (state, action) => {
      state.getUserProfileState = action.payload;
    });
    builder.addCase(getAllMatches.fulfilled, (state, action) => {
      state.getAllMatchListState = action.payload;
    });
    builder.addCase(getMatchList.fulfilled, (state, action) => {
      state.getMatchListState = action.payload;
    });
    builder.addCase(getSeriesList.fulfilled, (state, action) => {
      state.getSeriesListState = action.payload;
    });
  },
});

export default UserSlice;
