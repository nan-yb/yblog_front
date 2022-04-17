import { useParams } from "react-router-dom";
import ArticleContainer from "../containers/ArticleContainer";

const ArticlePage = () => {
  const params = useParams();
  const id = params.article;
  return <ArticleContainer articleId={id} />;
};

export default ArticlePage;
