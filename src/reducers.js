import { combineReducers } from "redux";
import counterReducer from "./containers/App/reducer";

import { connectRouter } from "connected-react-router";

const appReducer = history =>
  combineReducers({
    router: connectRouter(history),
    counter: counterReducer
  });

export default appReducer;
