import { apiSlice } from '../api/apiSlice';

const authApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    fetchUser: builder.query({
      query: () => 'account/user',
    }),
  }),
});

export const { useFetchUserQuery } = authApi;
