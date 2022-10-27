import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import {
	addRoomType,
	getRoomTypes,
	deletePropertySpaceById,
	getPropertySpaceById,
	// updateProperty,
} from '../../../Redux/Services/roomTypeService'

const initialState = {
	property: {},
}
export const addRoomTypeData = createAsyncThunk('property/add', async (payload: any) => {
	return await addRoomType('6350e5b0f851ef8676fbd105', payload)
})
export const getRoomType = createAsyncThunk('property/get', async () => {
	return await getRoomTypes()
})
export const deleteProperties = createAsyncThunk('property/delete', async (id: string) => {
	return await deletePropertySpaceById(id)
})
export const getPropertyDataById = createAsyncThunk('property/get', async (id: string) => {
	return await getPropertySpaceById(id)
})

// export const updatePropertyData = createAsyncThunk('property/update', async (payload: any) => {
// 	// const { id, ...rest } = payload
// 	return await updateProperty(payload)
// })

const roomTypeSlice = createSlice({
	name: 'roomType',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// builder.addMatcher(
		//     propertyInfoApi.endpoints.addProperty.matchFulfilled, (state, response) => {
		//         state.property = response?.['payload']?.['data'];
		//         return state;
		//     }
		// );
	},
})

export default roomTypeSlice.reducer

export const selectProperty = (state) => {
	return state.propertyInfo
}

export const useProperyDetails = () => {
	const property = useSelector(selectProperty)
	// return property;
	return useMemo(() => ({ property }), [property])
}