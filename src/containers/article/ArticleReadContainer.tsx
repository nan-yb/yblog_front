import ArticleRead from '@components/article/ArticleRead';
import { fetchOne, FETCH_ONE } from '@modules/article';
import { RootState } from '@modules/index';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface Props {
  id : string 
}

function ArticleReadContainer ( { id } : Props ){ 

  const dispatch = useDispatch();

  const { article , comment ,  isLoading } = useSelector(({ article , loading }: RootState) => ({
    article: article.articleInfo ,
    comment: article.commentInfo ,
    isLoading: loading[FETCH_ONE],
  }));
  
  useEffect(() => {
    dispatch(fetchOne(id));
  }, [dispatch , id]);
  
  return ( 
    <ArticleRead article={article} comment={comment} isLoading={isLoading}/> 
  ) 
};

export default ArticleReadContainer;