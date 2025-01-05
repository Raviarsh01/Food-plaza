import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";
import { AuthQuery } from "./redux-toolkit-query/auth";
import cartSlice from "./slices/cart";

const persistConfig = {
  key: "cart",
  storage,
};

const cartPersist = persistReducer(persistConfig, cartSlice);
export const store = configureStore({
  reducer: {
    cart: cartPersist,
    [AuthQuery.reducerPath]: AuthQuery.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(AuthQuery.middleware)
});

setupListeners(store.dispatch);
export let persistor = persistStore(store);
