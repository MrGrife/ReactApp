import { createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk';
import reducer from "../reducer"
import { loadState, saveState } from "./sessionStore"

const persistedState = loadState();

const store = createStore(reducer, persistedState, applyMiddleware(thunk))

store.subscribe(() => {
  saveState(store.getState())
})

export default store