import { api } from "../../../Redux/Services/api"
import { GET_PROPERTY } from "../../ConstAPI/ConstAPI"
import { GetPropertyInfo } from "./types"



export const propertySetupApi =  api.injectEndpoints({
    endpoints: (builder) => ({
        getPropertySetup: builder.query<GetPropertyInfo,void>({
            query:() => ({
                url: `${GET_PROPERTY}`,
                method:'GET',
            }),
            providesTags:["ProprtySetup"]
        }),
    })
})

export const {useGetPropertySetupQuery} = propertySetupApi 
export const {endpoints:{getPropertySetup}} = propertySetupApi