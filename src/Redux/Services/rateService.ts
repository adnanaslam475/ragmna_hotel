import { ADD_DERIVED_RATE, DELETE_SEASON, POLICIES, RATE, ROOM_TYPE, SEASON, UPDATE_SEASON } from "../../components/ConstAPI/ConstAPI";
import { apiInstance } from "./AxiosApi";
import authHeader from "./authHeader";
export const getRateProperty = () => {
  return apiInstance.get(RATE, { headers: authHeader() });
};
export const getRoomTypes = (id) => {
  return apiInstance.get(`${id}/` + ROOM_TYPE, { headers: authHeader() });
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