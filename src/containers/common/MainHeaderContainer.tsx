import { connect,  useDispatch  } from "react-redux";
import MainHeader from "../../components/common/MainHeader";
import { getAuthorized } from "../../modules/selector";
import { MyInfo } from "../../App";
import { RootState } from "../../modules";
import { setAccessToken, setMyInfo } from "../../modules/auth";
import { setLoginModalDirectLogin } from "../../modules/modal";

interface Props {
  readonly isAuthorized: boolean;
  readonly myInfo: MyInfo | null;
}

const MainHeaderContainer = ({ isAuthorized, myInfo }: Props) => {

  const dispatch = useDispatch();

  const onLogin = () => {
    dispatch(setLoginModalDirectLogin());
  }
  
  const onLogout = () => {
    dispatch(setAccessToken(""));
    dispatch(setMyInfo(null));
  };

  return (
    <>
      <MainHeader
        myInfo={myInfo}
        isAuthorized={isAuthorized}
        onLogin={onLogin}
        onLogout={onLogout}
      />
    </>
  );
};

export default connect((state: RootState) => {
  return {
    isAuthorized: getAuthorized(state),
    myInfo: state.auth.myInfo,
  };
})(MainHeaderContainer);
