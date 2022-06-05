import { RootState } from '@modules/index';
import { fetchList, FETCH_LIST } from '@modules/article';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HandlessUiTabs from '@components/custom/HandlessUiTabs';
import ArticleCard from '@components/article/ArticleCard.js';

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
            {article.map(artc => (
              <>
                {
                  artc.content && artc.content.map(i => (
                    <ArticleCard data={i} />
                  ))
                }
              </>
            ))}
          </div>
        <HandlessUiTabs>
          <div className="flex flex-wrap md:justify-between">
            {article.map(artc => (
              <>
                {
                  artc.content && artc.content.map(i => (
                    <ArticleCard data={i} />
                  ))
                }
              </>
            ))}
          </div>
        </HandlessUiTabs>
      </div>
    </>
  );
};

export default ArticleListContainer;