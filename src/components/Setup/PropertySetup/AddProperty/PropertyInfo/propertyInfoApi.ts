import { api } from "../../../../../Redux/Services/api"
import { GET_PROPERTY } from "../../../../ConstAPI/ConstAPI"

export const propertyInfoApi = api.injectEndpoints({
    endpoints: (builder) => ({
        // addProperty: builder.mutation<any, any>({
        //     query: ({ ...payload }) => ({
        //         url: `${GET_PROPERTY}`,
        //         method: 'POST',
        //         body: payload
        //     }),
        //     invalidatesTags: ["ProprtyInfo"]
        // }),

        getPropertyById: builder.query<any, any>({
            query: (id) => ({
                url: `${GET_PROPERTY}/${id}`,
                method: 'GET',
            }),
            providesTags: ["ProprtyInfo"]
        }),
    })
})

export const {  useGetPropertyByIdQuery } = propertyInfoApi
export const { endpoints: {  getPropertyById} } = propertyInfoApi