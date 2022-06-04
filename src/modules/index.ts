import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import { AuthState } from "../modules/auth";
import { LoadingState } from "../modules/loading";
import loading from "./loading";
import modal , { ModalState } from "./modal";
import article , { articleSaga, ArticleState } from "./article";

export interface RootState {
  auth: AuthState;
  article : ArticleState;
  loading: LoadingState;
  modal : ModalState;
}

const rootReducer = combineReducers({
  auth,
  loading,
  article , 
  modal
});

export function* rootSaga() {
  yield all([
    authSaga(),
    articleSaga(),
  ]);
}

export default rootReducer;
