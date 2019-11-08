import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "easy-peasy";
import App from "./components/app";

import store from "./store";

import useForm from 'react-hook-form'

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
