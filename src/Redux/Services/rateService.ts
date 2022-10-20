import { RATE, ROOM_TYPE } from "../../components/ConstAPI/ConstAPI";
import { apiInstance } from "./AxiosApi";
import authHeader from "./authHeader";
export const getRateProperty = () => {
  return apiInstance.get(RATE, { headers: authHeader() });
};
export const getRoomTypes = (id) => {
  return apiInstance.get(`${id}/`+ ROOM_TYPE, {headers:authHeader()})
}