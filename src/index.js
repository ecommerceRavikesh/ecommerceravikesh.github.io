import "babel-polyfill";
// babel-pollyfill is required for old browser suport of es6 features.
// it is a big file so alternative way to polyfill could be feature wise imports from core-js (another polyfil library)
//sepereate polyfills for the exact feature you want using library core-js. could be imported like below after installation.
// import 'core-js/es6/array/includes';
// import 'core-js/es6//map'

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
