import { createSlice } from '@reduxjs/toolkit'
import { propertySetupApi } from './propertySetupApi'

const initialState = {
}

const propertySetupSlice = createSlice({
    name: "proprtySetup",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            propertySetupApi.endpoints.getPropertySetup.matchFulfilled, (state, response) => {
                return state;
            }
        );

    }
})

export default propertySetupSlice.reducer
