import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

export const priceApi = createApi({
  reducerPath: 'api/price',
  baseQuery: retry(fetchBaseQuery({ baseUrl: '/' }), { maxRetries: 3 }),
  refetchOnFocus: true,
  endpoints: () => ({}),
});
