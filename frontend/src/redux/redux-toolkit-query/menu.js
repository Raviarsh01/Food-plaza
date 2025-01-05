import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const MenuQuery = createApi({
  reducerPath: "menu",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BACKEND_URL }),
  endpoints: (builder) => ({
    getMenuData: builder.query({
      query: () => `menu/all-items`,
    }),
  }),
});

export const { useGetMenuDataQuery } = MenuQuery;
