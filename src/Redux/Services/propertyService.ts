import { AMENITIES, GET_PROPERTY, RESERVATION, TAX_CONFIG } from '../../components/ConstAPI/ConstAPI';
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
export const updateProperty = (id,payload) => {
    return apiInstance.put(GET_PROPERTY+`/${id}`,payload,{headers:authHeader()})
}
export const getSettingById = (id ,typeId) => {
    return apiInstance.get(`${id}/`+RESERVATION+`/${typeId}/type`,{headers:authHeader()});
}
export const saveSettingById = (id,payload) => {
    return apiInstance.post(`${id}/`+RESERVATION,payload,{headers:authHeader()})
}
export const getAmenitie = () => {
    return apiInstance.get(AMENITIES,{headers:authHeader()});
}
export const addAmenitie = (payload) => {
    return apiInstance.post(AMENITIES,payload,{headers:authHeader()}) 
}
export const deleteAmenitieById = (id) => {
    return apiInstance.delete(AMENITIES+`/${id}`,{headers:authHeader()});
} 
export const getTaxConfigById = (id) => {
    return apiInstance.get(`${id}/`+TAX_CONFIG,{headers:authHeader()});
}
export const addTaxConfig = (id,payload) => {
    return apiInstance.post(`${id}/`+TAX_CONFIG,payload,{headers:authHeader()}) 
}
export const updateTaxConfig = (id,payload,taxId) => {
    return apiInstance.put(`${id}/`+TAX_CONFIG+`/${taxId}`,payload,{headers:authHeader()})
}
export const deleteTaxDataById = (id, taxId) => {
    return apiInstance.delete(`${id}/`+TAX_CONFIG+`/${taxId}`,{headers:authHeader()});
} 