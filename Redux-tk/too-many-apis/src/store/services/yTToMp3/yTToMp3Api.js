import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const yTToMp3ApiHeaders = {
  'x-rapidapi-host': 'youtube-mp36.p.rapidapi.com',
  'x-rapidapi-key': process.env.REACT_APP_X_RAPID_APP_KEY,
};

const baseUrl = 'https://youtube-mp36.p.rapidapi.com/dl';

const createRequest = (url) => ({url, headers: yTToMp3ApiHeaders});

export const yTToMp3Api = createApi({
  reducerPath: 'yTToMp3Api',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
    getMp3: builder.query({
      query: (id) => createRequest(`?id=${id}`),
    }),
  }),
});

// useLazyGetMp3Query
export const { useLazyGetMp3Query } = yTToMp3Api;