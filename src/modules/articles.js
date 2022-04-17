import { takeEvery, select } from "redux-saga/effects";

import * as articlesAPI from "../axios/articles"; // api/articles 안의 함수 모두 불러오기

import {
  reducerUtils,
  handleAsyncActions,
  createPromiseSaga,
  createPromiseSagaById,
  handleAsyncActionsById,
} from "../lib/asyncUtils";

const GET_ARTICLES = "GET_ARTICLES";
const GET_ARTICLES_SUCCESS = "GET_ARTICLES_SUCCESS";
const GET_ARTICLES_ERROR = "GET_ARTICLES_ERROR";
const GET_ARTICLE = "GET_ARTICLE";
const GET_ARTICLE_SUCCESS = "GET_ARTICLE_SUCCESS";
const GET_ARTICLE_ERROR = "GET_ARTICLE_ERROR";
const PRINT_STATE = "PRINT_STATE";

const CLEAR_ARTICLE = "CLEAR_ARTICLE";

export const getArticles = () => ({ type: GET_ARTICLES });
export const getArticle = (id) => ({
  type: GET_ARTICLE,
  payload: id,
  meta: id,
});

export const printState = () => ({ type: PRINT_STATE });

const getArticlesSaga = createPromiseSaga(
  GET_ARTICLES,
  articlesAPI.getArticles
);
const getArticleSaga = createPromiseSagaById(
  GET_ARTICLE,
  articlesAPI.getArticleById
);

// function* goToHomeSaga() {
//   const history = yield getContext("history");
//   history.push("/");
// }

function* printStateSaga() {
  const state = yield select((state) => state.articles);
  console.log(state);
}

export function* articlesSaga() {
  yield takeEvery(GET_ARTICLES, getArticlesSaga);
  yield takeEvery(GET_ARTICLE, getArticleSaga);
  yield takeEvery(PRINT_STATE, printStateSaga);
}

export const clearArticle = () => ({ type: CLEAR_ARTICLE });
// initialState 쪽도 반복되는 코드를 initial() 함수를 사용해서 리팩토링 했습니다.
const initialState = {
  articles: reducerUtils.initial(),
  article: {},
};

const getArticlesReducer = handleAsyncActions(GET_ARTICLES, "articles", true);
const getArticleReducer = handleAsyncActionsById(GET_ARTICLE, "article", true);

export default function articles(state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLES:
    case GET_ARTICLES_SUCCESS:
    case GET_ARTICLES_ERROR:
      return getArticlesReducer(state, action);
    case GET_ARTICLE:
    case GET_ARTICLE_SUCCESS:
    case GET_ARTICLE_ERROR:
      return getArticleReducer(state, action);
    case CLEAR_ARTICLE:
      return {
        ...state,
        article: reducerUtils.initial,
      };
    default:
      return state;
  }
}
