import { ArticleInfo } from '@models/index';
import React from 'react';

interface Props {
  readonly article : ArticleInfo | null;
  readonly isLoading : boolean;
}

function ArticleRead ( { article , isLoading }: Props){ 
  return ( 
    <div></div>
  ) 
};

export default ArticleRead;