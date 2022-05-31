import { createAction } from "redux-actions";
import { createReducer } from "typesafe-actions";
import { takeLatest, call, put } from "redux-saga/effects";
import * as authApi from "@libs/auth";
import client from "../lib/client";
import { AxiosResponse } from "axios";
import { LoginInput, MyInfo, RegisterInput } from "@models/index";
import Cookies from "js-cookie";

const SET_ACCESS_TOKEN = "auth/SET_ACCESS_TOKEN";

const LOGIN = "auth/LOGIN";
const REGISTER = 'auth/REGISTER';

const SET_MY_INFO = "auth/SET_MY_INFO";
const CHECK_MY_INFO = "auth/CHECK_MY_INFO";

export const setAccessToken = createAction(SET_ACCESS_TOKEN, (accessToken: string) => accessToken);
export const login = createAction(LOGIN, ({ userId, password }: LoginInput) => ({ userId, password }));
export const register = createAction(REGISTER , ({ email , password , nickName , company } : RegisterInput) => ({email , password , nickName , company}));

export const setMyInfo = createAction(SET_MY_INFO, (myInfo: MyInfo | null) => myInfo);
export const checkMyInfo = createAction(CHECK_MY_INFO);

function* loginSaga(action: ReturnType<typeof login>) {
  try {
    const { userId, password } = action.payload;

    const response: AxiosResponse = yield call(authApi.signIn, userId, password);

    if(!response) return null;

    const authorization = response.data.authorization;

    yield put(setAccessToken(authorization));

    client.defaults.headers.common['Authorization'] = `Bearer ${authorization}`;
    
    const accessToken =  authorization;
    Cookies.set("accessToken", accessToken, { expires: 1 });

  } catch (e) {
    console.log(e);
  }
}

function* registerSaga(action : ReturnType<typeof register>) {
  try {
    const { email , password , nickName , company } = action.payload;

    const response : AxiosResponse = yield call(authApi.signUp , email , password , nickName , company);

    if(!response) return null;

  } catch (error) {
    console.log(error);
  }
}

function* checkMyInfoSaga() {
  try {
    const response: AxiosResponse = yield call(authApi.getMyInfo);
    yield put(setMyInfo(response.data));
  } catch (e) {
    console.log(e);
  }
}

export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(REGISTER , registerSaga);
  yield takeLatest(CHECK_MY_INFO, checkMyInfoSaga);
}

export interface AuthState {
  accessToken: string;
  myInfo: MyInfo | null;
}

const initialState: AuthState = {
  accessToken: '',
  myInfo: null,
};

const auth = createReducer(
  initialState,
  {
    [SET_ACCESS_TOKEN]: (state, action) => ({
      ...state,
      accessToken: action.payload,
    }),
    [SET_MY_INFO]: (state, action) => ({
      ...state,
      myInfo: action.payload,
    }),
  },
);

export default auth;
