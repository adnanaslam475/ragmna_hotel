import { RATE } from "../../components/ConstAPI/ConstAPI";
import { apiInstance } from "./AxiosApi";
import authHeader from "./authHeader";
export const getRateProperty = (id) => {
  return apiInstance.get(`${id}/` + RATE, { headers: authHeader() });
};
