import { createSlice } from '@reduxjs/toolkit'
import { reservationApi } from './reservationApi';



const initialState = {

}

const reservationSlice = createSlice({
    name: "propery",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            reservationApi.endpoints.reservationDetails.matchFulfilled, (state, response) => {
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

export default reservationSlice.reducer




