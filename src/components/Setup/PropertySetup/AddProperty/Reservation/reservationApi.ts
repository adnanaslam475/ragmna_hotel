import { api } from "../../../../../Redux/Services/api"
import { RESERVATION } from "../../../../ConstAPI/ConstAPI"
import { useProperyDetails } from "../propertyInfoSlice"
import { Reservation } from "./types"


export const reservationApi =  api.injectEndpoints({
    endpoints: (builder) => ({
        // getPropertyInfo: builder.query<Reservation,void>({
        //     query:() => ({
        //         url: `${RESERVATION}`,
        //         method:'GET',
        //     }),
        //     providesTags:["ProprtyInfo"]
        // }),
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