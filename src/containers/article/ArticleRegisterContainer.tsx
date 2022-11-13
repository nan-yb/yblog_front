import ArticleRegister from '@components/article/ArticleRegister';
import { createArticle } from '@libs/article';
import { useHistory } from 'react-router-dom';


function ArticleRegisterContainer (){ 

  let history = useHistory();

  
  const uploadArticle =  async (title : string , thumbImageUrl : string, board : string  , content  : string) =>{

    if (!content || !title ) {
      alert("제목 및 내용을 입력해주세요.");
      return;
    }

    const data : any = createArticle( content , board , title , thumbImageUrl );

    if (!data) {
      return;
    }

    data.then( (resp : any) => {
      history.push(`/article/read/${resp._id}`);
    })
  }

  return ( 
    <ArticleRegister uploadArticle={uploadArticle} />
  ) 
};

export default ArticleRegisterContainer;

