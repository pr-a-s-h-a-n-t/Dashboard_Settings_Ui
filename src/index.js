import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./store/Store";
import { Provider } from "react-redux";
import "react-notifications-component/dist/theme.css";

import { ReactNotifications } from "react-notifications-component";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ReactNotifications />

    <App />
  </Provider>
);
