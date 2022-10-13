import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { addProperty } from '../../../../../Redux/Services/propertyService'
import { propertyInfoApi } from './propertyInfoApi'

const initialState = {
    property : {}
}
export const addPropertyData = createAsyncThunk("property/add", async (payload:any) => {
  return await addProperty(payload);
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


