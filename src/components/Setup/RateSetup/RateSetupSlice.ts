import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { addDerivedRate, addNightlyRate, getRateProperty, getRoomTypes } from "../../../Redux/Services/rateService";
const initialState = {
  rateList: [],
  roomTypes:[]
};
export const getRate = createAsyncThunk("rate/get", async () => {
  return await getRateProperty();
});
export const getRoomType = createAsyncThunk("roomType/get", async (id: string) => {
  return await getRoomTypes(id)
})
export const addNightly = createAsyncThunk('addNighty/add', async (payload:any) => {
  return await addNightlyRate(payload)
})
export const addDerived = createAsyncThunk('addDerived/add', async (id:string , payload:any) => {
  return await addDerivedRate(payload,id) 
})
const rateSetupSlice = createSlice({
  name: "rateSetup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getRate.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.rateList = action.payload.data;
      }
    );
        builder.addCase(
      getRoomType.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.roomTypes = action.payload.data;
      }
    );
  },
});
export default rateSetupSlice.reducer;
export const selectRateList = (state) => {
  return state.rateSetup.rateList;
};

export const useRateList = () => {
  const rateList = useSelector(selectRateList);
  return useMemo(() => ({ rateList }), [rateList]);
};
export const selectRoomTypes = (state) => {
  return state.rateSetup.roomTypes;
};

export const useRoomTypes = () => {
  const roomTypes = useSelector(selectRoomTypes);
  return useMemo(() => ({ roomTypes }), [roomTypes]);
};
