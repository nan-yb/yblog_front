import { delay, put, takeEvery } from "redux-saga/effects";
const SET_USER = "SET_USER";
const SET_USER_ASYNC = "INCREASE_ASYNC";

export const setUser = (user, token) => ({ type: SET_USER, user, token });
export const setUserAsync = () => ({ type: SET_USER_ASYNC });

function* setUserSaga() {
  yield delay(1000);
  yield put(setUser());
}

export function* userSaga() {
  yield takeEvery(SET_USER, setUserSaga);
}

const initialState = {
  email: null,
  nickname: null,
  authYn: null,
};

export default function user(state = initialState, action) {
  // state 의 초깃값을 initialState 로 지정했습니다.
  switch (action.type) {
    case SET_USER:
      if (action.token) {
        localStorage.setItem("token", action.token);
      } else {
        localStorage.removeItem("token");
      }

      return {
        ...state,
        email: action.user.email,
        nickname: action.user.nickname,
        authYn: action.user.authYn,
      };

    default:
      return state;
  }
}
