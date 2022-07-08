import { createReducer } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// Action Types
import { sendMessage, getMessage } from './chatBot.action';

const initialState = {
  messages: [],
};

const chatBotReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(sendMessage.type, (state, action) => {
      state.messages.push({
        id: nanoid(),
        type: 'sent',
        content: action.payload,
      });
    })
    .addCase(getMessage.type, (state, action) => {
      state.messages.push({
        id: nanoid(),
        type: 'received',
        content: action.payload,
      });
    })
    .addDefaultCase((state) => state);
});

export default chatBotReducer;