import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { MenuReducer, cartReducer } from "./Reducer/CartReducer";
import {
  RegisterReducer,
  LoginReducer,
  ProfileGetData,
} from "./Reducer/AuthReducer";
import { AboutPostReducer } from "./Reducer/PublicReducer";

const rootReducer = combineReducers({
  RegisterReducer,
  LoginReducer,
  MenuReducer,
  cartReducer,
  ProfileGetData,
  AboutPostReducer,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
