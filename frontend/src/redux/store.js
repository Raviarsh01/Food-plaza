import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";
import { MenuQuery } from "./redux-toolkit-query/menu";
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
    [MenuQuery.reducerPath]: MenuQuery.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(AuthQuery.middleware)
      .concat(MenuQuery.middleware),
});

setupListeners(store.dispatch);
export let persistor = persistStore(store);
