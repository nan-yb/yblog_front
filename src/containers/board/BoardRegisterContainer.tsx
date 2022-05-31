import BoardRegister from '@components/board/BoardRegister';
import React from 'react';


function BoardRegisterContainer (){ 

  const uploadArticle = (title : string , thumbImageUrl : string, board : string  , content  : string) =>{
    console.log(title , thumbImageUrl , board , content );
  }

  return ( 
    <BoardRegister uploadArticle={uploadArticle} />
  ) 
};

export default BoardRegisterContainer;

