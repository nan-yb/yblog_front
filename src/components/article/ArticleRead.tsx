import ToastViewer from '@components/custom/ToastViewer';
import React, { useRef } from 'react';
import "@styles/board.scss"
import { ArticleInfo } from '@models/index';

interface Props {
  readonly article : ArticleInfo | null;
  readonly comment : string | null;
  readonly isLoading : boolean;
}

const fontStyle = {
  fontSize : '42px' ,
  fontFamily : 'ONE-Mobile-Title'
}

function ArticleRead ( { article , comment , isLoading }: Props){ 

  const editorRef : any = useRef();
  
  if(!article) return null;
  if(isLoading) return null;


  const initialValue = article.content;

  return ( 
    <>
      {isLoading && "로딩중..."}
      {!isLoading && article && (
        <div className="mx-auto max-w-6xl py-24 h-full px-3.5">
          <div className="text-center">
            <span className="text-[48px]" style={fontStyle}>{article.title}</span>
          </div>
          
          <div className="flex w-1/2 pt-24 justify-center min-h-screen">
            <ToastViewer editorRef={editorRef} initialValue={initialValue}/>
          </div>
        </div>
      )}
    </>
  ) 
};

export default ArticleRead;