import { PROFILE } from '../../components/ConstAPI/ConstAPI';
import authHeader from './authHeader';
import { apiInstance } from './AxiosApi'

export const getProfile = () => {
    return apiInstance.get(PROFILE, { headers: authHeader() });
};

export const updateProfile = (payload:any) => {
    return apiInstance.put(PROFILE,payload, { headers: authHeader() });
}