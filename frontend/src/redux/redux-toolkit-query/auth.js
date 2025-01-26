import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchQuery } from "./config-rtk";

export const AuthQuery = createApi({
  reducerPath: "auth",
  baseQuery: fetchQuery,
  endpoints: (builder) => ({
    userSignup: builder.mutation({
      query: (formValues) => ({
        method: "POST",
        url: `auth/signup`,
        body: formValues,
      }),
    }),
    userLogin: builder.mutation({
      query: (formValues) => ({
        method: "POST",
        url: `auth/login`,
        body: formValues,
      }),
    }),
    getUserProfile: builder.query({
      query: () => `auth/user-profile`,
    }),
  }),
});

export const {
  useUserSignupMutation,
  useUserLoginMutation,
  useGetUserProfileQuery,
} = AuthQuery;
