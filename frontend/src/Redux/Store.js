import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  MenuReducer,
  cartReducer,
  SingleItemReducer,
} from "./Reducer/CartReducer";
import {
  RegisterReducer,
  LoginReducer,
  ProfileGetData,
} from "./Reducer/AuthReducer";
import { AboutPostReducer } from "./Reducer/OtherReducer";

const allReducers = combineReducers({
  RegisterReducer,
  LoginReducer,
  MenuReducer,
  cartReducer,
  ProfileGetData,
  AboutPostReducer,
  SingleItemReducer,
});

// get userData from localStorage
const userDataFromStorage = localStorage.getItem("UserData")
  ? JSON.parse(localStorage.getItem("UserData"))
  : null;
// initialState
const initialState = {
  LoginReducer: { user: { userData: userDataFromStorage } },
};
// middleware used thunk
const middleware = [thunk];

// store variable initialized
export const Store = legacy_createStore(
  allReducers,
  initialState,
  applyMiddleware(...middleware)
);

// export const Store = legacy_createStore(allReducers, applyMiddleware(thunk));
