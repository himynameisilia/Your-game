import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";

const initialState = {
  player: {},
  game: {}
};


const store = createStore(reducer, initialState, composeWithDevTools());
console.log(store.getState())

export default store;
