import { createSlice } from '@reduxjs/toolkit'
import { propertyInfoApi } from './propertyInfoApi'


const initialState = {

}

const propertyInfoSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            propertyInfoApi.endpoints.getPropertyInfo.matchFulfilled, (state, response) => {
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




