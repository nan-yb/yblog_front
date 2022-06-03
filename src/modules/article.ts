import createRequestSaga from "@libs/createRequestSaga";
import { ArticleInfo } from "@models/index";
import { createAction } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import { createReducer } from "typesafe-actions";
import * as api from "../lib/article";


export const FETCH_ONE = "article/FETCH_ONE";
const FETCH_ONE_SUCCESS = "article/FETCH_ONE_SUCCESS";
const FETCH_ONE_FAILURE = "article/FETCH_ONE_FAILURE";


export const fetchOne = createAction(FETCH_ONE, (id: string) => id);

const fetchOneSaga = createRequestSaga(FETCH_ONE, api.getArticleById);

export function* codeGroupSaga() {
  yield takeLatest(FETCH_ONE, fetchOneSaga);
}

export interface ArticleState {
  article : ArticleInfo | null;
}

const initialState: ArticleState = {
  article : null
};

const article = createReducer(
  initialState,
  {
    [FETCH_ONE]: (state) => ({
      ...state,
      article: null,
    }),
    [FETCH_ONE_SUCCESS]: (state, action) => ({
      ...state,
      article: action.payload,
    }),
    [FETCH_ONE_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
);

export default article;
