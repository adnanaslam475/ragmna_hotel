import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { getPolicies, deletePolicyById } from './../../../../Redux/Services/policiesService'

const initialState = {
	policyList: [],
}
export const getpolicies = createAsyncThunk('policies/get', async () => {
	return await getPolicies()
})

export const deletePolicies = createAsyncThunk('policies/delete', async (id: string) => {
	return await deletePolicyById(id)
})

const propertySetupSlice = createSlice({
	name: 'policySetup',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getpolicies.fulfilled, (state, action: PayloadAction<any>) => {
			state.policyList = action.payload.data
		})
	},
})

export default propertySetupSlice.reducer

export const selectPolicyList = (state) => {
	return state.proprtySetup.propertyList
}

export const usePropertyList = () => {
	const policyList = useSelector(selectPolicyList)
	return useMemo(() => ({ policyList }), [policyList])
}
