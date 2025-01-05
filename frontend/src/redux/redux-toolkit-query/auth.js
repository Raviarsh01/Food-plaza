import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AuthQuery = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_URL,
    prepareHeaders: (headers, { endpoint }) => {
      if (endpoint === "getUserProfile") {
        const token = localStorage.getItem("token");
        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }
      }
      return headers;
    },
  }),
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
