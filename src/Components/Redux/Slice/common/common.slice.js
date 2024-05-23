import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GameRuleGetApi , GetGameListApi} from "../../../Service/common.service";



export const getGameRule = createAsyncThunk(
  "common/getGameRule",
  async (token) => {
   
    try {
      const res = await GameRuleGetApi(token);
      return await res;
    } catch (err) {
      return err;
    }
  }
);

export const getGame = createAsyncThunk("common/getGame",async(token)=>{
  try {
    const res = await GetGameListApi(token)
    return res
  } catch (error) {
    return error;
  }
})

const CommonSlice = createSlice({
  name: "CommonSlice",
  initialState: {
    getGameRuleState: [],
    // getGameListState:[],
    isLoading:false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGameRule.pending, (state, action) => {
        state.getGameRuleState = [];
        state.isLoading=true
      })
      .addCase(getGameRule.fulfilled, (state, action) => {
        state.getGameRuleState = action.payload;
        state.isLoading=false
      })
      .addCase(getGameRule.rejected, (state, action) => {
        state.getGameRuleState = [];
        state.isLoading=false
      })
      .addCase(getGame.pending, (state, action) => {
        state.getGameListState = [];
        state.isLoading=true
      })
      .addCase(getGame.fulfilled, (state, action) => {
        state.getGameListState = action.payload;
        state.isLoading=false
      })
      .addCase(getGame.rejected, (state, action) => {
        state.getGameListState = [];
        state.isLoading=false
      });
  },
});

export default CommonSlice;
