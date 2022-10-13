import { GET_PROPERTY } from '../../components/ConstAPI/ConstAPI';
import { apiInstance } from './AxiosApi';
import authHeader from "./authHeader";

export const getProperty = () => {
        return apiInstance.get(GET_PROPERTY,{headers:authHeader()});
    }
export const getPropertyById = (id) => {
    return apiInstance.get(GET_PROPERTY+`/${id}`,{headers:authHeader()});
}
export const deletePropertyById = (id) => {
    return apiInstance.delete(GET_PROPERTY+`/${id}`,{headers:authHeader()});
}
export const addProperty = (payload) => {
    return apiInstance.post(GET_PROPERTY,payload,{headers:authHeader()})
}
   
