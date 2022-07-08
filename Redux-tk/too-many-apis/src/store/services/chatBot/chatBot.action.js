import { createAction } from '@reduxjs/toolkit';

// Action types
import { SEND_MESSAGE, GET_MESSAGE } from "./chatBot.actionTypes";

export const sendMessage = createAction(SEND_MESSAGE);
export const getMessage = createAction(GET_MESSAGE);
