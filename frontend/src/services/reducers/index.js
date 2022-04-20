import { combineReducers, createStore } from "redux";
import theme from "./theme";
import modal from "./modal";

const mainReducer = combineReducers({ theme, modal });

export default createStore(
  mainReducer,
  /*eslint-disable*/
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  /* eslint-enable */
);
