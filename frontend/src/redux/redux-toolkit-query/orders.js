import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchQuery } from "./config-rtk";

export const OrdersQuery = createApi({
  reducerPath: "orders",
  baseQuery: fetchQuery,
  tagTypes: ["Orders"],
  endpoints: (builder) => ({
    getOrdersData: builder.query({
      query: () => `orders/get-orders`,
      providesTags: ["Orders"],
    }),
    createOrder: builder.mutation({
      query: (formValues) => ({
        method: "POST",
        url: `orders/create`,
        body: formValues,
      }),
      invalidatesTags: ["Orders"],
    }),
  }),
});

export const { useGetOrdersDataQuery, useCreateOrderMutation } = OrdersQuery;
