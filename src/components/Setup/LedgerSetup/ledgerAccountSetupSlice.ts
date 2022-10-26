import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
// import moment from "moment";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import ledgerAccountActions from "../../../Redux/Services/ledgerAccountsServices";

const initialState = {
  ledgerAccountsList: [],
  ledgerAccountTypes: [],
};

export const getLedgerAccounts = createAsyncThunk(
  "ledger-accounts/get",
  async () => {
    try {
      return await ledgerAccountActions.getLedgerAccountsApi();
    } catch (error: any) {
      Swal.fire({
        title: "ERROR!",
        text: error?.response.data?.message || "Something Went wrong",
        allowOutsideClick: false,
        icon: "error",
      });
    }
  }
);

export const createLedgerAccounts = createAsyncThunk(
  "ledger-accounts/create",
  async (payload: any) => {
    try {
      return await ledgerAccountActions.createLedgerAccountApi(payload);
    } catch (error: any) {
      Swal.fire({
        title: "ERROR!",
        text: error?.response.data?.message || "Something Went wrong",
        allowOutsideClick: false,
        icon: "error",
      });
    }
  }
);

export const updateLedgerAccountById = createAsyncThunk(
  "ledger-accounts/update",
  async (payload: any) => {
    return await ledgerAccountActions.updateLedgerAccountApi(
      payload["_id"],
      payload
    );
  }
);

export const deleteLedgerAccountById = createAsyncThunk(
  "ledger-accounts/delete",
  async (id: any) => {
    return await ledgerAccountActions.deleteLedgerAccountByIdApi(id);
  }
);

/////////////////////////// LEDGER ACCOUNT TYPE ////////////////////////////////
export const getLedgerAccountTypes = createAsyncThunk(
  "ledger-accounts-types/get",
  async () => {
    return await ledgerAccountActions.getLedgerAccountsTypeApi();
  }
);

export const createLedgerAccountsType = createAsyncThunk(
  "ledger-accounts-types/create",
  async (payload: object) => {
    return await ledgerAccountActions.createLedgerAccountTypeApi(payload);
  }
);

export const updateLedgerAccountsTypeById = createAsyncThunk(
  "ledger-accounts-types/update",
  async (payload: object) => {
    return await ledgerAccountActions.updateLedgerAccountTypeApi(
      payload["_id"],
      payload
    );
  }
);

export const deleteLedgerAccountTypeById = createAsyncThunk(
  "ledger-accounts-types/delete",
  async (id: string) => {
    try {
      return await ledgerAccountActions.deleteLedgerAccountTypeByIdApi(id);
    } catch (error: any) {
      Swal.fire({
        title: "ERROR!!!",
        text: error?.response.data?.message || "Something Went wrong",
        allowOutsideClick: false,
        icon: "error",
      });
    }
  }
);

const ledgerAccountSetupSlice = createSlice({
  name: "ledgerAccount",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getLedgerAccounts.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.ledgerAccountsList = action.payload.data;
      }
    );
    builder.addCase(
      getLedgerAccountTypes.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.ledgerAccountTypes = action.payload.data;
      }
    );
  },
});

export default ledgerAccountSetupSlice.reducer;

export const selectLedgerAccountList = (state) =>
  state.ledgerAccount.ledgerAccountsList;

export const useLedgerAccountList = () => {
  const ledgerAccountsList = useSelector(selectLedgerAccountList);
  return useMemo(() => ({ ledgerAccountsList }), [ledgerAccountsList]);
};

export const selectLedgerAccountTypeList = (state) =>
  state.ledgerAccount.ledgerAccountTypes;

export const useLedgerAccountTypeList = () => {
  const ledgerAccountTypes = useSelector(selectLedgerAccountTypeList);
  return useMemo(() => ({ ledgerAccountTypes }), [ledgerAccountTypes]);
};
