import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchQuery } from "./config-rtk";

export const AuthQuery = createApi({
  reducerPath: "auth",
  baseQuery: fetchQuery,
  tagTypes: ["auth-data"],
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
      providesTags: ["auth-data"],
    }),
    updateProfile: builder.mutation({
      query: (formValues) => ({
        method: "POST",
        url: `auth/user-profile`,
        body: formValues,
      }),
      invalidatesTags: ["auth-data"],
    }),
    updatePassword: builder.mutation({
      query: (formValues) => ({
        method: "POST",
        url: `auth/change-password`,
        body: formValues,
      }),
    }),
  }),
});

export const {
  useUserSignupMutation,
  useUserLoginMutation,
  useGetUserProfileQuery,
  useUpdateProfileMutation,
  useUpdatePasswordMutation,
} = AuthQuery;
