import { createSlice } from '@reduxjs/toolkit'
import { propertyInfoApi } from './propertyInfoApi'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'

const initialState = {
    property : {}
}

const propertyInfoSlice = createSlice({
    name: "property",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            propertyInfoApi.endpoints.getPropertyInfo.matchFulfilled, (state, response) => {
                state.property = response?.['payload']?.['data'];
                return state;
            }
        );
        // builder.addMatcher(
        //     businessSetupApi.endpoints.signUp.matchFulfilled, (state, response) => {
        //         state.signUpResponse = response.payload.data ? response.payload.data : response.payload;
        //         return state;
        //     }
        // );
    }
})

export default propertyInfoSlice.reducer


export const selectProperty = (state) => {
    return state.auth.property
};

export const useProperyDetails = () => {
    const property = useSelector(selectProperty);
    // return property;
    return useMemo(() => ({ property }), [property])
}


