import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchQuery } from "./config-rtk";

export const OrdersQuery = createApi({
  reducerPath: "orders",
  baseQuery: fetchQuery,
  endpoints: (builder) => ({
    getOrdersData: builder.query({
      query: () => `orders/get-orders`,
    }),
    createOrder: builder.mutation({
      query: (formValues) => ({
        method: "POST",
        url: `orders/create`,
        body: formValues,
      }),
    }),
  }),
});

export const { useGetOrdersDataQuery, useCreateOrderMutation } = OrdersQuery;
