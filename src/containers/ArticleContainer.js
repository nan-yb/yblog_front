import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reducerUtils } from "../lib/asyncUtils";
import { getArticle } from "../modules/articles";
import Article from "../components/Article";

const ArticleContainer = ({ articleId }) => {
  const { data, loading, error } =
    useSelector((state) => state.articles.article[articleId]) ||
    reducerUtils.initial(); // 아예 데이터가 존재하지 않을 때가 있으므로, 비구조화 할당이 오류나지 않도록
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return;
    dispatch(getArticle(articleId));
  }, [articleId, dispatch, data]);

  if (loading && !data) return <div>로딩중...</div>; // 로딩중이고 데이터 없을때만
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return (
    <>
      <Article article={data.article} comment={data.comment} />{" "}
    </>
  );
};

export default ArticleContainer;
