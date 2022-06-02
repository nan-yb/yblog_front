import BoardModifyContainer from '@containers/board/BoardModifyContainer';
import MainLayout from '@layout/MainLayout';
import React from 'react';
import { useParams } from 'react-router-dom';


function BoardModifyPage (){ 

  const { id } : {id  : string } = useParams();

  return ( 
    <MainLayout>
      <BoardModifyContainer id = {id} />
    </MainLayout>
  ) 
};

export default BoardModifyPage;