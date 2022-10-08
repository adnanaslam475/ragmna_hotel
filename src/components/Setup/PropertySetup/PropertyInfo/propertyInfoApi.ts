import { api } from "../../../../Redux/Services/api";
import { GET_PROPERTY } from "../../../ConstAPI/ConstAPI";
import { GetPropertyInfo } from "./types";


export const propertyInfoApi =  api.injectEndpoints({
    endpoints: (builder) => ({
        getPropertyInfo: builder.query<GetPropertyInfo,void>({
            query:() => ({
                url: `${GET_PROPERTY}`,
                method:'GET',
            }),
            providesTags:["ProprtyInfo"]
        }),
        addProperty: builder.mutation<any, any >({
            query: ({...payload}) => ({
                url: `${GET_PROPERTY}`,
                method: 'POST',
                body: payload
            }),
            invalidatesTags:["ProprtyInfo"]
        }),
    })
})

export const {useGetPropertyInfoQuery, useAddPropertyMutation } = propertyInfoApi 
export const {endpoints:{getPropertyInfo,addProperty}} = propertyInfoApi