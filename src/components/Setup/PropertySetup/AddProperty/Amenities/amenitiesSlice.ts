import { createSlice } from '@reduxjs/toolkit'
import { amenitiesApi } from './amenitiesApi';

const initialState = {
}

const amenitiesSlice = createSlice({
    name: "Amenities",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            amenitiesApi.endpoints.getAmenities.matchFulfilled, (state, response) => {
                return state;
            }
        );

        builder.addMatcher(
            amenitiesApi.endpoints.addAmenities.matchFulfilled, (state, response) => {
                return state;
            }
        );

    }
})

export default amenitiesSlice.reducer
