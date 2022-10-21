import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useSelector } from "react-redux";

const initialState = {
  property: {},
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    saveGlobalProperty: (state, action) => {
      state.property = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export default globalSlice.reducer;
export const {saveGlobalProperty} = globalSlice.actions
export const selectGlobalProperty = (state) => {
  return state.global.property;
};

export const useGlobalProperty = () => {
  const property = useSelector(selectGlobalProperty);
  return useMemo(() => ({ property }), [property]);
};
