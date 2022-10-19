import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getRateProperty } from "../../../../Redux/Services/rateService";
const initialState = {
  propertyList: [],
};
export const getRate = createAsyncThunk("rate/get", async (id: string) => {
  return await getRateProperty(id);
});
const rateSetupSlice = createSlice({
  name: "proprtySetup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getRate.fulfilled,
      (state, action: PayloadAction<any>) => {}
    );
  },
});
export default rateSetupSlice.reducer;
