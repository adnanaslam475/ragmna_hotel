import { createSlice,createAsyncThunk ,PayloadAction} from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { getSupplierById, updateSupplier } from '../../../Redux/Services/supplierService'
import { RootState } from '../../../Redux/Store'
import { businessSetupApi } from './businessSetupApi'
import { BusinessInfo, UpdateSupplierById } from './types'


const initialState = {
    supplier: {},
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
export const getBussinesById = createAsyncThunk(
  "supplier/getById",
  async (id:string) => {
    return await getSupplierById(id);
  }
);
export const updateBusiness = createAsyncThunk(
  "supplier/update",
  async (payload:any) => {
    return await updateSupplier(payload['id'],payload);
  }
);
const businessSetupSlice = createSlice({
    name: "supplier",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
    builder.addCase(
      getBussinesById.fulfilled,
      (state, action: PayloadAction<any>) => {
          state.supplier = action.payload.data;
      }
    );
    builder.addCase(
      updateBusiness.fulfilled,
      (state, action: PayloadAction<any>) => {
          state.supplier = action.payload.data;
      }
    );
        // builder.addMatcher(
        //     businessSetupApi.endpoints.getSupplierById.matchFulfilled, (state, response) => {
        //         return state;
        //     }
        // );
        // builder.addMatcher(
        //     businessSetupApi.endpoints.signUp.matchFulfilled, (state, response) => {
        //         state.signUpResponse = response.payload.data ? response.payload.data : response.payload;
        //         return state;
        //     }
        // );
    }
})

export default businessSetupSlice.reducer
export const selectSupplier = (state) => {
  return state.supplier.supplier;
};

export const useSupplier = () => {
  const supplier = useSelector(selectSupplier);
  // return user;
  return useMemo(() => ({ supplier }), [supplier]);
};


export const selectSupplierData = (state: RootState) => state.supplier;


