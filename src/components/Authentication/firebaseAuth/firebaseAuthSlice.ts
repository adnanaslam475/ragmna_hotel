import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/Store";
import { login, signUp } from "./../../../Redux/Services/authService";
import { LogInRequestBody } from "./types";
const getDefaultUser = () => {
  return JSON.parse(localStorage.getItem("user") || "{}");
};

const initialState = {
  user: localStorage.getItem("user") ? getDefaultUser() : {},
  signUpResponse: {},
  error: {},
};
export const authLogin = createAsyncThunk(
  "auth/login",
  async (payload: LogInRequestBody) => {
    return login(payload);
  }
);
export const authSignup = createAsyncThunk(
  "auth/signup",
  async (payload: LogInRequestBody) => {
    return signUp(payload);
  }
);

const firebaseAuthSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      authLogin.fulfilled,
      (state, action: PayloadAction<any>) => {
          state.user = action.payload.data;
      }
    );
    builder.addCase(
      authSignup.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.signUpResponse = action.payload.data;
      }
    );
   
    // builder.addMatcher(
    //     firebaseAuthApi.endpoints.logIn.matchFulfilled, (state, response) => {
    //         state.user = response?.['payload']?.['data'];
    //         return state;
    //     }
    // );
    // builder.addMatcher(
    //     firebaseAuthApi.endpoints.signUp.matchFulfilled, (state, response) => {
    //         state.signUpResponse = response.payload.data ? response.payload.data : response.payload;
    //         return state;
    //     }
    // );
  },
});

export default firebaseAuthSlice.reducer;

export const selectUser = (state) => {
  return state.auth.user;
};
export const selectSignupResponse = (state) => state.auth.signUpResponse;

export const useUser = () => {
  const user = useSelector(selectUser);
  // return user;
  localStorage.setItem("user", JSON.stringify(user));
  return useMemo(() => ({ user }), [user]);
};

export const useSignupResponse = () => {
  const signUpResponse = useSelector(selectSignupResponse);
  return useMemo(() => ({ signUpResponse }), [signUpResponse]);
};

export const selectFirebaseAuthList = (state: RootState) => state.auth;
