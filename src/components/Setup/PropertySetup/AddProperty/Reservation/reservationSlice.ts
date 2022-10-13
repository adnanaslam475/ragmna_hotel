import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getSettingById, saveSettingById } from '../../../../../Redux/Services/propertyService';
import { reservationApi } from './reservationApi';



const initialState = {

}
export const getSettingByTypeId = createAsyncThunk("system-config/get",async (payload:any) => {
    return await getSettingById(payload.id,payload.typeId)
})
export const saveSettingByTypeId = createAsyncThunk("system-config/save",async (payload:any) => {
    return await saveSettingById(payload.propertyId,payload)
})
const reservationSlice = createSlice({
    name: "settingConfig",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(
            getSettingByTypeId.fulfilled,
            (state, action: PayloadAction<any>) => {
              
            }
        );
    }
})

export default reservationSlice.reducer




