
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, MemoryRouter as Router, Routes } from "react-router-dom";
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from "react-redux";
import rootReducer, { rootSaga } from "./modules";
import Cookies from "js-cookie";
import { checkMyInfo, setAccessToken } from "./modules/auth";
import client from '@libs/client';
import "./index.css"

const store = configureStore({
  reducer: rootReducer,
})

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

loadUser();


const container : any = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
