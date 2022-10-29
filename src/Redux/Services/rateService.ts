import { ADD_DERIVED_RATE, ALL_ROOM_TYPE, DELETE_SEASON, POLICIES, RATE, REMOVE_DERIVED_RATE, SEASON, UPDATE_DERIVED_RATE, UPDATE_SEASON } from "../../components/ConstAPI/ConstAPI";
import { apiInstance } from "./AxiosApi";
import authHeader from "./authHeader";
export const getRateProperty = () => {
  return apiInstance.get(RATE, { headers: authHeader() });
};
export const getRoomTypes = () => {
  return apiInstance.get(ALL_ROOM_TYPE, { headers: authHeader() });
};
export const addNightlyRate = (payload) => {
  return apiInstance.post(RATE, payload, { headers: authHeader() });
};
export const addDerivedRate = (payload, id) => {
  return apiInstance.post(RATE + `/${id}/` + ADD_DERIVED_RATE, payload, { headers: authHeader() });
}
export const getRateById = (id) => {
  return apiInstance.get(RATE + `/${id}`, { headers: authHeader() })
}
export const getDerivedRateById = (id) => {
  return apiInstance.get(RATE + `/${id}`, { headers: authHeader() })
}
export const createSeason = (id, payload) => {
  return apiInstance.post(RATE + `/${id}/` + SEASON, payload, { headers: authHeader() })
}
export const getPolicies = () => {
  return apiInstance.get(POLICIES, { headers: authHeader() })
}
export const updateSeason = (payload,id,sID) => {
  return apiInstance.post(RATE + `/${id}/` + UPDATE_SEASON + `/${sID}` , payload, { headers: authHeader() })
}
export const deleteSeason = (id,sId) => {
  return apiInstance.delete(RATE + `/${id}/` + DELETE_SEASON + `/${sId}`, { headers: authHeader() } )
}
export const updateRate = (id, payload) => {
  return apiInstance.put(RATE+`/${id}`,payload,{headers:authHeader()})
}
export const deleteRate = (id) => {
  return apiInstance.delete(RATE+`/${id}`,{headers:authHeader()})
}
export const updateDerivedRate = (payload,id,dID) => {
  return apiInstance.post(RATE + `/${id}/` + UPDATE_DERIVED_RATE + `/${dID}` , payload, { headers: authHeader() })
}
export const deleteDerivedRate = (dId,rId) => {
  return apiInstance.delete(RATE+`/${rId}/${REMOVE_DERIVED_RATE}/${dId}`,{headers:authHeader()})
}