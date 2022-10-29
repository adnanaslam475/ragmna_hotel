import authHeader from "./authHeader";
import {
  CREATE_LEDGER_ACCOUNTS,
  CREATE_LEDGER_ACCOUNT_TYPES,
  DELETE_LEDGER_ACCOUNTS,
  DELETE_LEDGER_ACCOUNT_TYPES,
  GET_LEDGER_ACCOUNTS,
  GET_LEDGER_ACCOUNT_TYPES,
  UPDATE_LEDGER_ACCOUNTS,
  UPDATE_LEDGER_ACCOUNT_TYPES,
} from "../../components/ConstAPI/ConstAPI";
import { apiInstance } from "./AxiosApi";

const getLedgerAccountsApi = () => {
  return apiInstance.get(GET_LEDGER_ACCOUNTS, { headers: authHeader() });
};

const createLedgerAccountApi = (payload: any) => {
  return apiInstance.post(CREATE_LEDGER_ACCOUNTS, payload, {
    headers: authHeader(),
  });
};

const updateLedgerAccountApi = (id, payload) => {
  return apiInstance.put(`${UPDATE_LEDGER_ACCOUNTS}/${id}`, payload, {
    headers: authHeader(),
  });
};

const deleteLedgerAccountByIdApi = (id: string) => {
  return apiInstance.delete(DELETE_LEDGER_ACCOUNTS + `/${id}`, {
    headers: authHeader(),
  });
};

export const getLedgerAccountsTypeApi = () => {
  return apiInstance.get(GET_LEDGER_ACCOUNT_TYPES, {
    headers: authHeader(),
  });
};

export const createLedgerAccountTypeApi = (payload) => {
  return apiInstance.post(CREATE_LEDGER_ACCOUNT_TYPES, payload, {
    headers: authHeader(),
  });
};

export const updateLedgerAccountTypeApi = (id, payload) => {
  return apiInstance.put(`${UPDATE_LEDGER_ACCOUNT_TYPES}/${id}`, payload, {
    headers: authHeader(),
  });
};

export const deleteLedgerAccountTypeByIdApi = (id) => {
  return apiInstance.delete(`${DELETE_LEDGER_ACCOUNT_TYPES}/${id}`, {
    headers: authHeader(),
  });
};

const ledgerAccountsServices = {
  getLedgerAccountsApi,
  createLedgerAccountApi,
  updateLedgerAccountApi,
  deleteLedgerAccountByIdApi,
  getLedgerAccountsTypeApi,
  createLedgerAccountTypeApi,
  updateLedgerAccountTypeApi,
  deleteLedgerAccountTypeByIdApi,
};
export default ledgerAccountsServices;
