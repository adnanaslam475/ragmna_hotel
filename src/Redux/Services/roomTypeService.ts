import { ROOM_TYPE } from '../../components/ConstAPI/ConstAPI'
import { apiInstance } from './AxiosApi'
import authHeader from './authHeader'

export const getRoomTypes = () => {
	return apiInstance.get('6350e5b0f851ef8676fbd105/roomType', { headers: authHeader() })
}
export const getPropertySpaceById = (id) => {
	return apiInstance.get('6350e5b0f851ef8676fbd105/' + ROOM_TYPE + `/${id}`, { headers: authHeader() })
}
export const deletePropertySpaceById = (id) => {
	return apiInstance.delete('6350e5b0f851ef8676fbd105/' + ROOM_TYPE + `/${id}`, { headers: authHeader() })
}
export const addRoomType = (id, payload) => {
	return apiInstance.post(`/${id}/` + ROOM_TYPE, payload, { headers: authHeader() })
}
// export const updateProperty = (payload) => {
// 	return apiInstance.put('6350e5b0f851ef8676fbd105/' + ROOM_TYPE + `/${id}`, payload, { headers: authHeader() })
// }
