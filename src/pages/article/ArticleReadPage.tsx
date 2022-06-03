import ArticleReadContainer from '@containers/article/ArticleReadContainer';
import MainLayout from '@layout/MainLayout';
import { useParams } from 'react-router-dom';

function ArticleReadPage (){ 

  const { id } : {id  : string } = useParams();

  return (
    <MainLayout>
      <ArticleReadContainer id={id} />
    </MainLayout>
  );
};

export default ArticleReadPage;