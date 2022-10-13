import { GET_SUPPLIER_ID } from '../../components/ConstAPI/ConstAPI';
import {apiInstance} from './AxiosApi';
import authHeader from "./authHeader";

export const getSupplierById = (id) => {
    return apiInstance.get(GET_SUPPLIER_ID+`/${id}`,{headers:authHeader()});
}
export const updateSupplier = (id,payload) => {
    return apiInstance.put(GET_SUPPLIER_ID+`/${id}`,payload,{headers:authHeader()})
}
   
