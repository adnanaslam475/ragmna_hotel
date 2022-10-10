import { api } from "../../../../../Redux/Services/api"
import { RESERVATION } from "../../../../ConstAPI/ConstAPI"

export const reservationApi =  api.injectEndpoints({
    endpoints: (builder) => ({
        reservationDetails: builder.mutation<any, any >({
            query: (payload) => ({
                url: `${payload.propertyId}/${RESERVATION}`,
                method: 'POST',
                body: payload
            }),
            invalidatesTags:["ReservationDetail"]
        }),
    })
})

export const { useReservationDetailsMutation } = reservationApi 
export const {endpoints:{reservationDetails}} = reservationApi