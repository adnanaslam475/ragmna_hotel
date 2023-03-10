import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../Api/baseURL";
import { RootState } from "../Store";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://gtipms-env.eba-kx774cjf.us-east-1.elasticbeanstalk.com/',
    // credentials: 'include',
    mode: "cors",
    prepareHeaders: async (headers, { getState, endpoint }) => {
      const { accessToken } = (getState() as RootState).auth.user;
      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({}),
  tagTypes: [
    "Auth",
    "Supplier",
    "ProprtyInfo",
    "ProprtySetup",
    "ledgerAccount",
    "ReservationDetail",
    "Amenities",
  ],
});

