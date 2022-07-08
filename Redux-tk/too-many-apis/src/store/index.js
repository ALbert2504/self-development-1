import { configureStore } from '@reduxjs/toolkit';

// Reducers
import { shoesCollectionApi } from './services/shoesCollection/shoesCollectionApi';
import { yTToMp3Api } from './services/yTToMp3/yTToMp3Api';
import { chatBotApi } from './services/chatBot/chatBotApi';
import chatBotReducer from './services/chatBot/chatBot.reducer';

const store = configureStore({
  reducer: {
    [shoesCollectionApi.reducerPath]: shoesCollectionApi.reducer,
    [yTToMp3Api.reducerPath]: yTToMp3Api.reducer,
    [chatBotApi.reducerPath]: chatBotApi.reducer,
    chatBot: chatBotReducer,
  },
});

export default store;