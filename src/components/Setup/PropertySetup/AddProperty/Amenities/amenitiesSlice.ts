import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { addAmenitie, deleteAmenitieById, getAmenitie } from '../../../../../Redux/Services/propertyService';

const initialState = {
    amenitesList:[]
}
export const getAmenities = createAsyncThunk('amenities/get' , async () => {
    return await getAmenitie();
})
export const addAmenities = createAsyncThunk("system-config/get",async (payload:any) => {
    return await addAmenitie(payload)
})
export const deleteAmenities = createAsyncThunk("amenities/delete", async (id:string) => {
    return await deleteAmenitieById(id);
});

const amenitiesSlice = createSlice({
    name: "amenities",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(
            getAmenities.fulfilled,
            (state, action:PayloadAction<any>) => {
                state.amenitesList = action.payload.data;
            }
        );

        // builder.addMatcher(
        //     amenitiesApi.endpoints.addAmenities.matchFulfilled, (state, response) => {
        //         return state;
        //     }
        // );

    }
})

export default amenitiesSlice.reducer

export const selectAmenitiesList = (state) => {
    console.log(state);
    return state.amenities.amenitesList;
  };
  
  export const useAmenitiesList = () => {
    const amenitesList = useSelector(selectAmenitiesList);
    return useMemo(() => ({ amenitesList }), [amenitesList]);
  };
