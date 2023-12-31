// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { MenuReducer, cartReducer } from "./Reducer/CartReducer";
// import { RegisterReducer, LoginReducer } from "./Reducer/AuthReducer";

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["MenuReducer", "LoginReducer"],
// };

// const rootReducer = combineReducers({
//   RegisterReducer,
//   LoginReducer,
//   MenuReducer,
//   cartReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const Store = createStore(persistedReducer, applyMiddleware(thunk));

// export const Persistor = persistStore(Store);

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  MenuReducer,
  cartReducer,
  HomePageGetReducer,
} from "./Reducer/CartReducer";
import {
  RegisterReducer,
  LoginReducer,
  ProfileGetData,
} from "./Reducer/AuthReducer";

const rootReducer = combineReducers({
  RegisterReducer,
  LoginReducer,
  MenuReducer,
  cartReducer,
  ProfileGetData,
  HomePageGetReducer,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));

// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { MenuReducer, cartReducer } from "./Reducer/CartReducer";
// import { RegisterReducer, LoginReducer } from "./Reducer/AuthReducer";

// // Your reducers
// const rootReducer = combineReducers({
//   RegisterReducer,
//   LoginReducer,
//   MenuReducer,
//   cartReducer,
// });

// // Save state to local storage
// const saveState = (state) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem("reduxState", serializedState);
//   } catch (error) {
//     console.error("Error saving state to local storage:", error);
//   }
// };

// // Load state from local storage
// const loadState = () => {
//   try {
//     const serializedState = localStorage.getItem("reduxState");
//     if (serializedState === null) {
//       return undefined;
//     }
//     return JSON.parse(serializedState);
//   } catch (error) {
//     console.error("Error loading state from local storage:", error);
//     return undefined;
//   }
// };

// // Create the store with the initial state loaded from local storage
// export const Store = createStore(
//   rootReducer,
//   loadState(), // Initial state loaded from local storage
//   applyMiddleware(thunk)
// );

// // Subscribe to store changes and save state to local storage
// Store.subscribe(() => {
//   saveState(Store.getState());
// });
