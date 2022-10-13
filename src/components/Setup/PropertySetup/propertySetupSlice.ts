import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { deletePropertyById, getProperty } from "../../../Redux/Services/propertyService";
import { propertySetupApi } from "./propertySetupApi";

const initialState = {
  propertyList: [],
};
export const getProperties = createAsyncThunk("properties/get", async () => {
  return await getProperty();
});

export const deleteProperties = createAsyncThunk("properties/delete", async (id:string) => {
  return await deletePropertyById(id);
});

const propertySetupSlice = createSlice({
  name: "proprtySetup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getProperties.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.propertyList = action.payload.data;
      }
    );
    builder.addCase(
      deleteProperties.fulfilled,
      (state, action: PayloadAction<any>) => {
        // state.propertyList = action.payload.data;
      }
    );
    // builder.addMatcher(
    //     propertySetupApi.endpoints.getPropertySetup.matchFulfilled, (state, response) => {
    //         return state;
    //     }
    // );
  },
});

export default propertySetupSlice.reducer;

export const selectPropertyList = (state) => {
  return state.proprtySetup.propertyList;
};

export const usePropertyList = () => {
  const propertyList = useSelector(selectPropertyList);
  return useMemo(() => ({ propertyList }), [propertyList]);
};

