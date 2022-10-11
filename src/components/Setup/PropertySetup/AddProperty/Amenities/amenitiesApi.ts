import { api } from "../../../../../Redux/Services/api"
import { AMENITIES } from "../../../../ConstAPI/ConstAPI"
import { AmenitiesTypes } from "../types"

export const amenitiesApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAmenities: builder.query<any, void>({
            query: () => ({
                url: `${AMENITIES}`,
                method: 'GET',
            }),
            providesTags: ["Amenities"]
        }),

        addAmenities: builder.mutation<any, any>({
            query: ({ ...payload }) => ({
                url: `${AMENITIES}`,
                method: 'POST',
                body: payload
            }),
            invalidatesTags: ["Amenities"]
        }),

        deleteAmenities: builder.mutation<any, any>({
            query: (id) => ({
                url: `${AMENITIES}/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["Amenities"]
        }),
    })
})

export const { useGetAmenitiesQuery, useAddAmenitiesMutation, useDeleteAmenitiesMutation } = amenitiesApi
export const { endpoints: { getAmenities, addAmenities, deleteAmenities } } = amenitiesApi