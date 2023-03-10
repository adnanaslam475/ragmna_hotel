import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { addDerivedRate, addNightlyRate, createSeason, deleteDerivedRate, deleteRate, deleteSeason, getPolicies, getRateById, getRateProperty, getRoomTypes, updateDerivedRate, updateRate, updateSeason } from "../../../Redux/Services/rateService";
const initialState = {
  rateList: [],
  roomTypes: [],
  rateData: {
    derivedRates:[]
  },
  
  policies:[]
};
export const getRate = createAsyncThunk("rate/get", async () => {
  return await getRateProperty();
});
export const getRoomType = createAsyncThunk("roomType/get", async () => {
  return await getRoomTypes()
})
export const addNightly = createAsyncThunk('addNighty/add', async (payload:any) => {
  return await addNightlyRate(payload)
})
export const addDerived = createAsyncThunk('addDerived/add', async (payload:any) => {
  return await addDerivedRate(payload,payload.rateId) 
})
export const alterDerivedRate = createAsyncThunk('updateDerived/add', async (payload:any) => {
  const {id,dId,...rest} = payload;
  return await updateDerivedRate(rest,id,dId) 
})
export const getById = createAsyncThunk('getRate/id', async (id: string) => {
  return await getRateById(id)
})
export const addSeason = createAsyncThunk('season/add', async (payload: any) => {
  const {id,...rest} = payload
  return await createSeason(id,rest)
})
export const alterSeason = createAsyncThunk('season/update', async (payload: any) => {
  const {id,sId,...rest} = payload
  return await updateSeason(rest,id,sId,)
})
export const fetchPolicies = createAsyncThunk('policies/get', async () => {
  return await getPolicies()
})
export const removeSeason = createAsyncThunk('season/delete', async (payload: any) => {
  const {id,sId} = payload
  return await deleteSeason(id,sId)
})
export const updateNightlyRate = createAsyncThunk('rate/update', async (payload: any) => {
  const {id,...rest} = payload
  return await updateRate(id,rest)
})
export const removeRate = createAsyncThunk('rate/remove', async (id: string) => {
  return await deleteRate(id)
})
export const removeDerivedRate = createAsyncThunk('derived/rate/remove', async (payload:any) => {
  return await deleteDerivedRate(payload.dId,payload.rId)
})
const rateSetupSlice = createSlice({
  name: "rateSetup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRate.fulfilled, (state, action: PayloadAction<any>) => {
      state.rateList = action.payload.data;
    });
    builder.addCase(
      getRoomType.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.roomTypes = action.payload.data;
      }
    );
    builder.addCase(getById.fulfilled, (state, action: PayloadAction<any>) => {
      state.rateData = action.payload.data;
    });
    builder.addCase(
      fetchPolicies.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.policies = action.payload.data;
      }
    );
  },
});
export default rateSetupSlice.reducer;
export const selectRateList = (state) => {
  return state.rateSetup.rateList;
};

export const useRateList = () => {
  const rateList = useSelector(selectRateList);
  return useMemo(() => ({ rateList }), [rateList]);
};
export const selectRoomTypes = (state) => {
  return state.rateSetup.roomTypes;
};

export const useRoomTypes = () => {
  const roomTypes = useSelector(selectRoomTypes);
  return useMemo(() => ({ roomTypes }), [roomTypes]);
};
export const selectRateData = (state) => {
  return state.rateSetup.rateData;
};

export const useRateData = () => {
  const rateData = useSelector(selectRateData);
  return useMemo(() => ({ rateData }), [rateData]);
};
export const selectPolicies = (state) => {
  return state.rateSetup.policies;
};

export const usePolicies = () => {
  const policies = useSelector(selectPolicies);
  return useMemo(() => ({ policies }), [policies]);
};
