import BoardModify from '@components/board/BoardModify';
import React from 'react';

interface Props {
  id : string 
}

function BoardModifyContainer ({id} : Props ){ 
  return ( 
    <BoardModify></BoardModify>
  ) 
};

export default BoardModifyContainer;