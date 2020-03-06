import { combineReducers } from "redux";
import { connectRouter, LOCATION_CHANGE } from "connected-react-router/immutable";
import layoutPageReducer from "./layoutPageReducer";
import authReducer from "./authReducer";
import productReducer from "./productReducer"

export default history =>
  combineReducers({
    router: connectRouter(history),
    layoutPageReducer,
    authReducer,
    productReducer
  });
