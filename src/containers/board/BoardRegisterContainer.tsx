import BoardRegister from '@components/board/BoardRegister';
import client from '@libs/client';
import React from 'react';
// import { useHistory } from 'react-router-dom';


function BoardRegisterContainer (){ 

  // let history = useHistory();

  
  const uploadArticle =  async (title : string , thumbImageUrl : string, board : string  , content  : string) =>{


    // const data : any = await client({
    //   url: "/article/create",
    //   method: "post",
    //   data: {
    //     content: content,
    //     board: board,
    //     title: title,
    //     thumbImageUrl: thumbImageUrl,
    //   },
    // });

    // if (!data) {
    //   return;
    // }

    // history.push(`/article/${data.key}`);
  }

  return ( 
    <BoardRegister uploadArticle={uploadArticle} />
  ) 
};

export default BoardRegisterContainer;

