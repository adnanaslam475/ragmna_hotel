import { ADD_DERIVED_RATE, RATE, ROOM_TYPE } from "../../components/ConstAPI/ConstAPI";
import { apiInstance } from "./AxiosApi";
import authHeader from "./authHeader";
export const getRateProperty = () => {
  return apiInstance.get(RATE, { headers: authHeader() });
};
export const getRoomTypes = (id) => {
  return apiInstance.get(`${id}/` + ROOM_TYPE, { headers: authHeader() });
};
export const addNightlyRate = (payload) => {
  return apiInstance.post(RATE, payload,{ headers: authHeader() });
};
export const addDerivedRate = (payload,id) => {
  return apiInstance.post(RATE+`/${id}/`+ADD_DERIVED_RATE, payload,{ headers: authHeader() });
}
