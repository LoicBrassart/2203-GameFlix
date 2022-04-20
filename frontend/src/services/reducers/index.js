import { combineReducers, createStore } from "redux";
import theme from "./theme";

const mainReducer = combineReducers({ theme });

export default createStore(
  mainReducer,
  /*eslint-disable*/
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  /* eslint-enable */
);
