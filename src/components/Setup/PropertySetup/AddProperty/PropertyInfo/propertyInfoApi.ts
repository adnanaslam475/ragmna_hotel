import { api } from "../../../../../Redux/Services/api"
import { GET_PROPERTY } from "../../../../ConstAPI/ConstAPI"

export const propertyInfoApi = api.injectEndpoints({
    endpoints: (builder) => ({
        addProperty: builder.mutation<any, any>({
            query: ({ ...payload }) => ({
                url: `${GET_PROPERTY}`,
                method: 'POST',
                body: payload
            }),
            invalidatesTags: ["ProprtyInfo"]
        }),
    })
})

export const { useAddPropertyMutation } = propertyInfoApi
export const { endpoints: { addProperty } } = propertyInfoApi