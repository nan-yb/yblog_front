import ArticleModifyContainer from '@containers/article/ArticleModifyContainer';
import MainLayout from '@layout/MainLayout';
import { useParams } from 'react-router-dom';

type ParamsType = {
	id : string
};


function ArticleModifyPage (){ 

  const { id }  = useParams() as ParamsType;

  return ( 
    <MainLayout>
      <ArticleModifyContainer id = {id} />
    </MainLayout>
  ) 
};

export default ArticleModifyPage;