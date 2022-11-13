import ArticleCard from '@components/article/ArticleCard.js';
import { fetchList, FETCH_LIST } from '@modules/article';
import { RootState } from '@modules/index';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ArticleListContainer() {
  
  const dispatch = useDispatch();
  const { article, isLoading } = useSelector(({ article, loading }: RootState) => ({
    article: article.articleInfos,
    isLoading: loading[FETCH_LIST],
  }));

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  if (!article) return null;
  if (isLoading) return <div>로딩중</div>;

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4  ">
        <div className="flex flex-wrap md:justify-between">
          { article.map( artc => (
            <div key={artc._id}>
                <ArticleCard data={artc}  />
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default ArticleListContainer;