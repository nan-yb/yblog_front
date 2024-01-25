import createRequestSaga from "@libs/createRequestSaga";
import { ArticleInfo, BoardInfo } from "@type/index";
import { ActionFunctionAny, createAction } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import { createReducer } from "typesafe-actions";
import * as api from "../lib/article";
import { ActionFunction } from "react-router-dom";
import { Action } from "redux";


export const FETCH_ONE = "article/FETCH_ONE";
const FETCH_ONE_SUCCESS = "article/FETCH_ONE_SUCCESS";
const FETCH_ONE_FAILURE = "article/FETCH_ONE_FAILURE";

export const FETCH_LIST = "article/FETCH_LIST";
const FETCH_LIST_SUCCESS = "article/FETCH_LIST_SUCCESS";
const FETCH_LIST_FAILURE = "article/FETCH_LIST_FAILURE";


export const fetchOne : ActionFunctionAny<Action<any>>  = createAction(FETCH_ONE, (id: string) => id);
export const fetchList : ActionFunctionAny<Action<any>>   = createAction(FETCH_LIST);

const fetchOneSaga = createRequestSaga(FETCH_ONE, api.getArticleById);
const fetchListSaga = createRequestSaga(FETCH_LIST, api.getArticles);

export function* articleSaga() {
  yield takeLatest(FETCH_ONE, fetchOneSaga);
  yield takeLatest(FETCH_LIST, fetchListSaga);
}
export interface ArticleState {
  articleInfo : ArticleInfo | null;
  articleInfos : BoardInfo[] | null;
  commentInfo : null;
}

const initialState: ArticleState = {
  articleInfo : null,
  articleInfos: null,
  commentInfo : null
};

const article = createReducer(
  initialState,
  {
    [FETCH_ONE]: (state) => ({
      ...state,
      articleInfo: null,
      commentInfo : null
    }),
    [FETCH_ONE_SUCCESS]: (state, action) => ({
      ...state,
      articleInfo: action.payload.article ,
      commentInfo: action.payload.comment 
    }),
    [FETCH_ONE_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [FETCH_LIST]: (state) => ({
      ...state,
      articleInfos : null,
    }),
    [FETCH_LIST_SUCCESS]: (state, action) => ({
      ...state,
      articleInfos: action.payload.article ,
    }),
    [FETCH_LIST_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
);

export default article;
