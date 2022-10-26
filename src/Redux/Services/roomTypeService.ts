import { ROOM_TYPE } from '../../components/ConstAPI/ConstAPI'
import { apiInstance } from './AxiosApi'
import authHeader from './authHeader'

// export const getProperty = () => {
//         return apiInstance.get(GET_PROPERTY,{headers:authHeader()});
//     }
// export const getPropertyById = (id) => {
//     return apiInstance.get(GET_PROPERTY+`/${id}`,{headers:authHeader()});
// }
// export const deletePropertyById = (id) => {
//     return apiInstance.delete(GET_PROPERTY+`/${id}`,{headers:authHeader()});
// }
export const addRoomType = (payload, id) => {
	return apiInstance.post(`/${id}` + ROOM_TYPE, payload, { headers: authHeader() })
}
// export const updateProperty = (id,payload) => {
//     return apiInstance.put(GET_PROPERTY+`/${id}`,payload,{headers:authHeader()})
// }
