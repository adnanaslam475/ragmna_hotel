import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../../Api/baseURL'
import { useUser } from '../../components/Authentication/firebaseAuth/firebaseAuthSlice';
import { RootState } from '../Store'



export const api = createApi({

    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        // credentials: 'include',
        mode:'cors',
        prepareHeaders: async (headers, { getState, endpoint }) => {
            console.log((getState()) as RootState);
            const { accessToken } = ((getState()) as RootState).auth.user
            if (accessToken) {
                headers.set('Authorization', `Bearer ${accessToken}`
                )
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
    }),
    tagTypes: ["Auth","Supplier"],
})

export const { } = api
