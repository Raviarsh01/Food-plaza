import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Store, Persistor } from "./Redux/Store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={Store}>
  //   <PersistGate loading={null} persistor={Persistor}>
  //     <App />
  //   </PersistGate>
  // </Provider>
  <Provider store={Store}>
    <App />
  </Provider>
);
