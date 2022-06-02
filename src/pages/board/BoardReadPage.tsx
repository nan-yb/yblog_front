import BoardReadContainer from '@containers/board/BoardReadContainer';
import MainLayout from '@layout/MainLayout';
import { useParams } from 'react-router-dom';

function BoardReadPage (){ 

  const { id } : {id  : string } = useParams();

  return (
    <MainLayout>
      <BoardReadContainer id={id} />
    </MainLayout>
  );
};

export default BoardReadPage;