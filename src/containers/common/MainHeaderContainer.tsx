import { connect,  useDispatch  } from "react-redux";
import MainHeader from "../../components/common/MainHeader";
import { getAuthorized } from "../../modules/selector";
import { MyInfo } from "@models/index";
import { RootState } from "../../modules";
import { setAccessToken, setMyInfo } from "../../modules/auth";
import { setLoginModalDirectLogin } from "../../modules/modal";
import client from "@libs/client";
import Cookies from "js-cookie";

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
    alert('로그아웃 합니다.');
    
    delete client.defaults.headers.common.Authorization;
    Cookies.remove('accessToken');

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
