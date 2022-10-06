import { AUTH_LOGIN, AUTH_SIGN_UP } from '../../ConstAPI/ConstAPI'
import { api } from '../../../Redux/Services/api'
import { LogInRequestBody, SignupRequestBody } from './types'
export const firebaseAuthApi = api.injectEndpoints({
    endpoints: (builder) => ({
        signUp: builder.mutation<any,SignupRequestBody>({
            query: ({...payload}) => ({
                url: `${AUTH_SIGN_UP}`,
                method: 'POST',
                body: payload
            }),

            invalidatesTags:["Auth"]
        }),
        logIn: builder.mutation<any,LogInRequestBody>({
            query: ({...payload}) => ({
                url: `${AUTH_LOGIN}`,
                method: 'POST',
                body: payload
            }),
            transformResponse: (response: { data:any }, meta, arg) => response.data,
            invalidatesTags:["Auth"]
        }),
    }),
})

export const { useSignUpMutation , useLogInMutation } = firebaseAuthApi
export const { endpoints: { signUp ,logIn } } = firebaseAuthApi