import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getProfile, updateProfile } from "../../Redux/Services/profileService";

const initialState = {
    profileInfo:{}
}
export const getProfiles = createAsyncThunk("profile/get", async () => {
  return await getProfile();
});

export const alterProfile = createAsyncThunk("profile/update", async(payload:any)=>{
    return await updateProfile(payload);
})

const profileSlice = createSlice({
    name:'profile',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(
            getProfiles.fulfilled,(state,action: PayloadAction<any>) =>{
                state.profileInfo = action.payload.data
            }
        )
    },
})
export default profileSlice.reducer;


export const selectProfileInfo = (state) =>
    state.profile.profileInfo
export const useProfileInfo = () => {
    const profileInfo =  useSelector(selectProfileInfo)
    return useMemo(()=> ({profileInfo}),[profileInfo])
}