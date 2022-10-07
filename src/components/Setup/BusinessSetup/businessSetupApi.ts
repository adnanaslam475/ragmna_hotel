import { api } from "../../../Redux/Services/api";
import { GET_SUPPLIER_ID } from "../../ConstAPI/ConstAPI";
import { GetSupplierById, UpdateSupplierById } from "./types";

export const businessSetupApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getSupplierById: builder.query<GetSupplierById,{id:string}>({
            query: ({id}) => ({
                url: `${GET_SUPPLIER_ID}/${id}`,
                method: 'GET',
            }),
            providesTags:["Supplier"]
        }),
        updateSupplierById: builder.mutation<any, UpdateSupplierById >({
            query: ({id, ...payload}) => ({
                url: `${GET_SUPPLIER_ID}/${id}`,
                method: 'PUT',
                body: payload
            }),
            invalidatesTags:["Supplier"]
        }),
    }),
})

export const {useGetSupplierByIdQuery ,useUpdateSupplierByIdMutation} = businessSetupApi
export const {endpoints:{getSupplierById , updateSupplierById}} = businessSetupApi