import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const shoesCollectionApiHeaders = {
  'x-rapidapi-host': 'shoes-collections.p.rapidapi.com',
  'x-rapidapi-key': process.env.REACT_APP_X_RAPID_APP_KEY
};

const baseUrl = 'https://shoes-collections.p.rapidapi.com';

const createRequest = (url) => ({url, headers: shoesCollectionApiHeaders});

export const shoesCollectionApi = createApi({
  reducerPath: 'shoesCollectionApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
    getShoes: builder.query({
      query: () => createRequest('/shoes'),
    }),
    getShoe: builder.query({
      query: (shoeId) => createRequest(`/shoes/${shoeId}`),
    }),
  }),
});

export const { useGetShoesQuery, useGetShoeQuery } = shoesCollectionApi;