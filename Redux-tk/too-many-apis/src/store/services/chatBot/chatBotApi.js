import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const chatBotApiHeaders = {
  'content-type': 'application/json',
  'x-rapidapi-host': 'chatbot19.p.rapidapi.com',
  'x-rapidapi-key': process.env.REACT_APP_X_RAPID_APP_KEY
};

const baseUrl = 'https://chatbot19.p.rapidapi.com/chatbot';

const createRequest = (method, body = null) => ({headers: chatBotApiHeaders, method, body});

export const chatBotApi = createApi({
  reducerPath: 'chatBotApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
    sendMessage: builder.mutation({
      query: (message) => {
        const body = {
          language: 'en',
          message,
          context: [" array of previous message"],
        };

        return createRequest('POST', body);
      },
    }),
  }),
});

export const { useSendMessageMutation } = chatBotApi;