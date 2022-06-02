import BoardRead from '@components/board/BoardRead';

interface Props {
  id : string 
}

function BoardReadContainer ({id} : Props ){ 
    return ( 
      <BoardRead></BoardRead> 
    ) 
};

export default BoardReadContainer;