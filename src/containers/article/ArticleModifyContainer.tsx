import ArticleModify from '@components/article/ArticleModify';
import React from 'react';

interface Props {
  id : string 
}

function ArticleModifyContainer ({id} : Props ){ 
  return ( 
    <ArticleModify></ArticleModify>
  ) 
};

export default ArticleModifyContainer;