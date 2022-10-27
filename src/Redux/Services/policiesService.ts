import { POLICIES } from '../../components/ConstAPI/ConstAPI'
import { apiInstance } from './AxiosApi'
import authHeader from './authHeader'

export const getPolicies = () => {
	return apiInstance.get(POLICIES, { headers: authHeader() })
}
export const getPolicyById = (id) => {
	return apiInstance.get(POLICIES + `/${id}`, { headers: authHeader() })
}
export const deletePolicyById = (id) => {
	return apiInstance.delete(POLICIES + `/${id}`, { headers: authHeader() })
}
export const addPolicy = (payload) => {
	return apiInstance.post(POLICIES, payload, { headers: authHeader() })
}
export const updatePolicy = (id, payload) => {
	return apiInstance.put(POLICIES + `/${id}`, payload, { headers: authHeader() })
}
