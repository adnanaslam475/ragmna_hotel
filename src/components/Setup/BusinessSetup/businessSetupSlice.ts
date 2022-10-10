import { createSlice } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../Redux/Store'
import { businessSetupApi } from './businessSetupApi'

const getDefaultUser = () => {
    return JSON.parse(localStorage.getItem('user') || '{}')
}

const initialState = {
    selectSupplierData: {
        businessName: '',
        crNumber: '',
        vatNumber: '',
        businessContactPerson: '',
        businessContactNumber: 0,
        logo: '',
        currency: '',
        timeZone: '',
    }

}

const businessSetupSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            businessSetupApi.endpoints.getSupplierById.matchFulfilled, (state, response) => {
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

export default businessSetupSlice.reducer




