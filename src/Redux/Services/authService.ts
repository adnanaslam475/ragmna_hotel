import { AUTH_LOGIN, AUTH_SIGN_UP } from '../../components/ConstAPI/ConstAPI';
import {apiInstance} from './AxiosApi';
export const login = (payload) => {
        return apiInstance.post(AUTH_LOGIN,payload);
    }
export const signUp = (payload) => {
    return apiInstance.post(AUTH_SIGN_UP,payload);
}

   
