import {createSlice} from '@reduxjs/toolkit'
import { RootState } from '../../../Redux/Store'
import { firebaseAuthApi } from './firebaseAuthApi'

const initialState = {
    
}

const firebaseAuthSlice = createSlice({
    name:"user",
    initialState,
    reducers:{

    },
    extraReducers:(builder) => {
        builder.addMatcher(
            firebaseAuthApi.endpoints.signUp.matchFulfilled , (state,payload)=>{
                console.log(payload,'payloadsss');
            }
        )
    }
})

export default firebaseAuthSlice.reducer

export const selectFirebaseAuthList = (state:RootState) => state.auth