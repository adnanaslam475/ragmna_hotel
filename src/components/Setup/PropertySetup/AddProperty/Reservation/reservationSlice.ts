import { createSlice } from '@reduxjs/toolkit'
import { reservationApi } from './reservationApi';



const initialState = {

}

const reservationSlice = createSlice({
    name: "reservation",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            reservationApi.endpoints.reservationDetails.matchFulfilled, (state, response) => {
                return state;
            }
        );
    }
})

export default reservationSlice.reducer




