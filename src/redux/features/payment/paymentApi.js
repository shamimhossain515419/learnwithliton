import { apiSlice } from "../api/apiSlice";

const paymentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchUsersPayment: builder.query({
      query: () => "payment",
    }),
  }),
});

export const { useFetchUsersPaymentQuery } = paymentApi;
