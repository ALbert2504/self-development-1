import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./index";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export type RootStore = ReturnType<typeof rootReducer>;

export default store;