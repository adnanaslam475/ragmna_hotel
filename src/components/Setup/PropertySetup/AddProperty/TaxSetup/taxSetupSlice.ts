import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { addTaxConfig, getTaxConfigById } from '../../../../../Redux/Services/propertyService'

const initialState = {

}
export const getTaxConfigDetails = createAsyncThunk("tax-config/get",async (id:string) => {
    return await getTaxConfigById(id)
})

export const addTaxConfigDetails = createAsyncThunk("tax-config/add",async (payload:any) => {
    return await addTaxConfig(payload.propertyId,payload)
})

const taxSetupSlice = createSlice({
    name: "taxCongfig",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(
            getTaxConfigDetails.fulfilled,
            (state, action: PayloadAction<any>) => {
              
            }
        );
    }
})

export default taxSetupSlice.reducer




