import { api } from "../../../../../Redux/Services/api"
import { AMENITIES } from "../../../../ConstAPI/ConstAPI"
import { AmenitiesTypes, GetAmenities } from "../types"

export const amenitiesApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAmenities: builder.query<GetAmenities, void>({
            query: () => ({
                url: `${AMENITIES}`,
                method: 'GET',
            }),
            providesTags: ["Amenities"]
        }),

        addAmenities: builder.mutation<any, AmenitiesTypes>({
            query: ({ ...payload }) => ({
                url: `${AMENITIES}`,
                method: 'POST',
                body: payload
            }),
            invalidatesTags: ["Amenities"]
        }),

        deleteAmenities: builder.mutation<any, string>({
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