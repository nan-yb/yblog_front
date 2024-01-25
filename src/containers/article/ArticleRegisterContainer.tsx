import ArticleRegister from '@components/article/ArticleRegister';
import { createArticle } from '@libs/article';
import { useNavigate } from 'react-router-dom';


function ArticleRegisterContainer (){ 

  const navigate = useNavigate();

  
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
      navigate(`/article/read/${resp._id}`)
    })
  }

  return ( 
    <ArticleRegister uploadArticle={uploadArticle} />
  ) 
};

export default ArticleRegisterContainer;

