import ArticleReadContainer from '@containers/article/ArticleReadContainer';
import MainLayout from '@layout/MainLayout';
import { useParams } from 'react-router-dom';

type ParamsType = {
	id : string
};

function ArticleReadPage (){ 

  const { id } = useParams() as ParamsType;

  return (
    <MainLayout>
      <ArticleReadContainer id={id} />
    </MainLayout>
  );
};

export default ArticleReadPage;