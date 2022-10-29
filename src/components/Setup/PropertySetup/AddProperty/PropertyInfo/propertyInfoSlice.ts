import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { addProperty, getPropertyById, updateProperty } from '../../../../../Redux/Services/propertyService'

const initialState = {
    property : {}
}
export const addPropertyData = createAsyncThunk("property/add", async (payload:any) => {
  return await addProperty(payload);
});

export const getPropertyDataById = createAsyncThunk("property/get", async (id:string) => {
  return await getPropertyById(id);
});

export const updatePropertyData = createAsyncThunk("property/update", async (payload: any) => {
  const { id,...rest } = payload;
  return await updateProperty(id,rest);
});

const propertyInfoSlice = createSlice({
    name: "proprtyInfo",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        // builder.addMatcher(
        //     propertyInfoApi.endpoints.addProperty.matchFulfilled, (state, response) => {
        //         state.property = response?.['payload']?.['data'];
        //         return state;
        //     }
        // );
    }
})

export default propertyInfoSlice.reducer


export const selectProperty = (state) => {
    return state.propertyInfo
};

export const useProperyDetails = () => {
    const property = useSelector(selectProperty);
    // return property;
    return useMemo(() => ({ property }), [property])
}


