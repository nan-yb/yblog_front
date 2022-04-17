import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "./assets/gnb.scss";
import "./assets/global.scss";
import "./assets/modal.scss";

import App from "./App";

//redux
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import logger from "redux-logger";
import { BrowserRouter } from "react-router-dom"; // * BrowserRouter 불러오기
import Gnb from "./components/Gnb";
import { composeWithDevTools } from "redux-devtools-extension";
import rootRefactReducer, { rootSaga } from "./modules";
// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// ); // 스토어를 만듭니다.

const sagaMiddleware = createSagaMiddleware({});

const store = createStore(
  rootRefactReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Gnb />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
