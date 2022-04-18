import { combineReducers } from "redux";
import user, { userSaga } from "./common";
import modal from "./modal";
import board from "./board";
import articles, { articlesSaga } from "./articles";
import { all } from "redux-saga/effects";
const rootRefactReducer = combineReducers({ user, board, modal, articles });
export function* rootSaga() {
  yield all([userSaga(), articlesSaga()]);
}

export default rootRefactReducer;
