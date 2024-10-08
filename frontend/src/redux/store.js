import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  MenuReducer,
  cartReducer,
  SingleItemReducer,
} from "./reducer/cart-reducer";
import {
  RegisterReducer,
  LoginReducer,
  ProfileGetData,
} from "./reducer/auth-reducer";
import { AboutPostReducer } from "./reducer/home-reducer";

const cartPersistConfig = {
  key: "cart",
  storage,
};

const loginPersistConfig = {
  key: "login",
  storage,
};

const LoginReducerPersist = persistReducer(loginPersistConfig, LoginReducer);
const cartReducerPersist = persistReducer(cartPersistConfig, cartReducer);

const allReducers = combineReducers({
  RegisterReducer,
  auth: LoginReducerPersist,
  MenuReducer,
  cart: cartReducerPersist,
  profileData:ProfileGetData,
  AboutPostReducer,
  SingleItemReducer,
});

const store = legacy_createStore(allReducers, applyMiddleware(thunk));
const persistor = persistStore(store);
export { store, persistor };
