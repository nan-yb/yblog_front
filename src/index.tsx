import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MemoryRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer, { rootSaga } from "./modules";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import Cookies from "js-cookie";
import { checkMyInfo, setAccessToken  } from "./modules/auth";
import client from '@libs/client';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

function loadUser() {
  try {
    const token = Cookies.get("accessToken");
    if (!token) return;
    store.dispatch(setAccessToken(token));
    client.defaults.headers.common.Authorization = `Bearer ${token}`;
    store.dispatch(checkMyInfo());
  } catch (e) {
    console.log(e);
  }
}

sagaMiddleware.run(rootSaga);

loadUser();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
