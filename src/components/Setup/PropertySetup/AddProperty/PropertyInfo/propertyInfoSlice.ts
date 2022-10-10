import { createSlice } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { propertyInfoApi } from './propertyInfoApi'

const initialState = {
    property : {}
}

const propertyInfoSlice = createSlice({
    name: "proprtyInfo",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            propertyInfoApi.endpoints.addProperty.matchFulfilled, (state, response) => {
                state.property = response?.['payload']?.['data'];
                return state;
            }
        );
    }
})

export default propertyInfoSlice.reducer


export const selectProperty = (state) => {
    console.log(state.propertyInfo,"state");
    return state.propertyInfo
};

export const useProperyDetails = () => {
    const property = useSelector(selectProperty);
    console.log(property,"property");
    
    // return property;
    return useMemo(() => ({ property }), [property])
}


