import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  addRoomType,
  getRoomTypes,
  deletePropertySpaceById,
  getPropertySpaceById,
  // updateProperty,
} from "../../../Redux/Services/roomTypeService";

const initialState = {
  property: {},
};
export const addRoomTypeData = createAsyncThunk(
  "room-type/add",
  async (payload: any) => {
    return await addRoomType(payload.propertyId, payload);
  }
);
export const getRoomType = createAsyncThunk("rooms/get", async () => {
  return await getRoomTypes();
});
export const deleteProperties = createAsyncThunk(
  "roomtype/delete",
  async (id: string) => {
    return await deletePropertySpaceById(id);
  }
);
export const getPropertyDataById = createAsyncThunk(
  "roomtype/get",
  async (id: string) => {
    return await getPropertySpaceById(id);
  }
);

const roomTypeSlice = createSlice({
  name: "roomType",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default roomTypeSlice.reducer;

export const selectProperty = (state) => {
  return state.propertyInfo;
};

export const useProperyDetails = () => {
  const property = useSelector(selectProperty);
  // return property;
  return useMemo(() => ({ property }), [property]);
};
