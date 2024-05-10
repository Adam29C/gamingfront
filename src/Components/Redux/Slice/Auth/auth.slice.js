import { createSlice, createReducer, createAsyncThunk } from "@reduxjs/toolkit";
// // import { DispatchLogin } from "../../../Layout/Auth/Login";
import {
  LOGIN,
  SIGN_UP,
  SEND_OTP,
  VERIFY_OTP,
  GENERATE_TOKEN,
  FORGET_PASSWORD_LINK,
  VERFY_FORGET_PASSWORD_LINK,
} from "../../../Service/auth.service";

export const Generate_Token = createAsyncThunk(
  "auth/generatetoken",
  async (data) => {
    try {
      const res = await GENERATE_TOKEN(data);
      return await res;
    } catch (err) {
      return err;
    }
  }
);
export const Login = createAsyncThunk("auth/login", async (data) => {
  const { user_id, token } = data;

  try {
    const res = await LOGIN(data, token);
    return await res;
  } catch (err) {
    return err;
  }
});

export const Sign_Up = createAsyncThunk("auth/signup", async (data) => {
  try {
    const res = await SIGN_UP(data);
    return await res;
  } catch (err) {
    return err;
  }
});

export const Send_OTP = createAsyncThunk(
  "auth/send_otp",
  async (data, token) => {

    console.log("data" , token);
    try {
      const res = await SEND_OTP(data, token);
      return await res;
    } catch (err) {
      return err;
    }
  }
);
export const Verify_OTP = createAsyncThunk("auth/verify_otp", async (data) => {
  try {
    const res = await VERIFY_OTP(data);
    return await res;
  } catch (err) {
    return err;
  }
});
export const Forget_Password_Link = createAsyncThunk(
  "auth/forget_password_link",
  async (data) => {
    try {
      const res = await FORGET_PASSWORD_LINK(data);
      return await res;
    } catch (err) {
      return err;
    }
  }
);
export const Verify_Forget_Password_Link = createAsyncThunk(
  "auth/verify_otp_link",
  async (data) => {
    try {
      const res = await VERFY_FORGET_PASSWORD_LINK(data);
      return await res;
    } catch (err) {
      return err;
    }
  }
);

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState: {
    isLoading: false,
    isError: false,
    auth_Info: [],
    sign_Info: [],
    send_otp_Info: [],
    verify_otp_Info: [],
    Forget_Password_Link_Info: [],
    verify_Password_Link_Info: [],
    token_Info: [],
    status: false,
  },

  recuders: {},
  extraReducers: (builder) => {
    builder
      .addCase(Login.pending, (state, action) => {
        return { ...state, auth_Info: [], isLoading: true };
      })
      .addCase(Login.fulfilled, (state, action) => {
        return { ...state, auth_Info: action.payload, isLoading: false };
      })
      .addCase(Login.rejected, (state, action) => {
        return { ...state, auth_Info: [], isLoading: false };
      })
      .addCase(Sign_Up.pending, (state, action) => {
        return { ...state, sign_Info: [], isLoading: true };
      })
      .addCase(Sign_Up.fulfilled, (state, action) => {
        return { ...state, sign_Info: action.payload, isLoading: false };
      })
      .addCase(Sign_Up.rejected, (state, action) => {
        return { ...state, sign_Info: [], isLoading: false };
      })
      .addCase(Send_OTP.pending, (state, action) => {
        return { ...state, send_otp_Info: [], isLoading: true };
      })
      .addCase(Send_OTP.fulfilled, (state, action) => {
        return { ...state, send_otp_Info: action.payload, isLoading: false };
      })
      .addCase(Send_OTP.rejected, (state, action) => {
        return { ...state, send_otp_Info: [], isLoading: false };
      })
      .addCase(Verify_OTP.pending, (state, action) => {
        return { ...state, verify_otp_Info: [], isLoading: true };
      })
      .addCase(Verify_OTP.fulfilled, (state, action) => {
        return { ...state, verify_otp_Info: action.payload, isLoading: false };
      })
      .addCase(Verify_OTP.rejected, (state, action) => {
        return { ...state, verify_otp_Info: [], isLoading: false };
      })
      .addCase(Forget_Password_Link.pending, (state, action) => {
        return { ...state, Forget_Password_Link_Info: [], isLoading: true };
      })
      .addCase(Forget_Password_Link.fulfilled, (state, action) => {
        return {
          ...state,
          Forget_Password_Link_Info: action.payload,
          isLoading: false,
        };
      })
      .addCase(Forget_Password_Link.rejected, (state, action) => {
        return { ...state, Forget_Password_Link_Info: [], isLoading: false };
      })
      .addCase(Verify_Forget_Password_Link.pending, (state, action) => {
        return { ...state, verify_Password_Link_Info: [], isLoading: true };
      })
      .addCase(Verify_Forget_Password_Link.fulfilled, (state, action) => {
        return {
          ...state,
          verify_Password_Link_Info: action.payload,
          isLoading: false,
        };
      })
      .addCase(Verify_Forget_Password_Link.rejected, (state, action) => {
        return { ...state, verify_Password_Link_Info: [], isLoading: false };
      })
      .addCase(Generate_Token.pending, (state, action) => {
        return { ...state, token_Info: [], isLoading: true };
      })
      .addCase(Generate_Token.fulfilled, (state, action) => {
        return {
          ...state,
          token_Info: action.payload,
          isLoading: false,
        };
      })
      .addCase(Generate_Token.rejected, (state, action) => {
        return { ...state, token_Info: [], isLoading: false };
      });
  },
});

export default AuthSlice;
