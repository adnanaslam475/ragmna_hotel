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
        })
    })
})

export const {useGetPropertyInfoQuery} = propertyInfoApi 
export const {endpoints:{getPropertyInfo}} = propertyInfoApi