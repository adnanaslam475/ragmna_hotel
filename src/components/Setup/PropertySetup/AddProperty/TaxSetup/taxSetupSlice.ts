import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  addTaxConfig,
  deleteTaxDataById,
  getTaxConfigById,
  updateTaxConfig,
} from "../../../../../Redux/Services/propertyService";

const initialState = {
  taxData: [],
};
export const getTaxConfigDetails = createAsyncThunk(
  "tax-config/get",
  async (id: string) => {
    return await getTaxConfigById(id);
  }
);

export const addTaxConfigDetails = createAsyncThunk(
  "tax-config/add",
  async (payload: any) => {
    return await addTaxConfig(payload.propertyId, payload);
  }
);

export const updateTaxData = createAsyncThunk(
  "tax-config/update",
  async (payload: any) => {
    return await updateTaxConfig(payload.propertyId, payload, payload.taxId);
  }
);

export const deleteTaxData = createAsyncThunk(
  "tax-config/delete",
  async (payload: any) => {
    return await deleteTaxDataById(payload.id, payload.taxId);
  }
);

const taxSetupSlice = createSlice({
  name: "taxCongfig",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getTaxConfigDetails.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.taxData = action.payload.data;
      }
    );
  },
});

export default taxSetupSlice.reducer;

export const selectTaxList = (state) => {
  return state.taxCongfig.taxData;
};

export const useTaxData = () => {
  const taxData = useSelector(selectTaxList);
  return useMemo(() => ({ taxData }), [taxData]);
};
