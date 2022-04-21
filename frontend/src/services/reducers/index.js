import { combineReducers, createStore } from "redux";
import theme from "./theme";
import modal from "./modal";
import auth from "./auth";

const mainReducer = combineReducers({ theme, modal, auth });

export default createStore(
  mainReducer,
  /*eslint-disable*/
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  /* eslint-enable */
);
