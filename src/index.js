import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "./assets/gnb.scss";
import "./assets/global.scss";
import "./assets/modal.scss";

import App from "./App";

//redux
import { createStore } from "redux";
import rootReducer from "./store";
import { Provider } from "react-redux";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); // 스토어를 만듭니다.

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
