import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { MenuReducer, cartReducer } from "./Reducer/CartReducer";
import { RegisterReducer, LoginReducer } from "./Reducer/AuthReducer";

const rootReducer = combineReducers({
  RegisterReducer,
  LoginReducer,
  MenuReducer,
  cartReducer,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
