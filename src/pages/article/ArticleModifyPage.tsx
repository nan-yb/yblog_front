import ArticleModifyContainer from '@containers/article/ArticleModifyContainer';
import MainLayout from '@layout/MainLayout';
import React from 'react';
import { useParams } from 'react-router-dom';


function ArticleModifyPage (){ 

  const { id } : {id  : string } = useParams();

  return ( 
    <MainLayout>
      <ArticleModifyContainer id = {id} />
    </MainLayout>
  ) 
};

export default ArticleModifyPage;