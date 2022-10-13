import { api } from "../../../Redux/Services/api"
import { GET_PROPERTY } from "../../ConstAPI/ConstAPI"
import { GetPropertyInfo } from "./types"



export const propertySetupApi =  api.injectEndpoints({
    endpoints: (builder) => ({
        // getPropertySetup: builder.query<GetPropertyInfo,void>({
        //     query:() => ({
        //         url: `${GET_PROPERTY}`,
        //         method:'GET',
        //     }),
        //     providesTags:["ProprtySetup"]
        // }),

        // deletePropertySetup: builder.mutation<any,string>({
        //     query:(id) => ({
        //         url: `${GET_PROPERTY}/${id}`,
        //         method:'DELETE',
        //     }),
        //     invalidatesTags:["ProprtySetup"]
        // }),
    })
})

// export const { useDeletePropertySetupMutation} = propertySetupApi 
// export const {endpoints:{ deletePropertySetup}} = propertySetupApi