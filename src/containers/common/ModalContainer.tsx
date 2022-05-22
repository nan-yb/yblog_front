import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { RootState } from "../../modules";
import { checkMyInfo, login } from "../../modules/auth";
import LoginModal from "@components/common/LoginModal";
import RegisterModal from "@components/common/RegisterModal";
import { setLoginModalClose } from "@modules/modal";

const ModalContainer = ({ history }: RouteComponentProps) => {
  const dispatch = useDispatch();

  const { accessToken, myInfo  , modal } = useSelector(({ auth , modal }: RootState) => ({
    accessToken: auth.accessToken,
    myInfo: auth.myInfo,
    modal :  modal.modalInfo,
  }));

  const onSignIn = (userId: string, password: string) => {
    try {
      dispatch(login({ userId, password }));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (accessToken) {
      dispatch(checkMyInfo());
    }
  }, [accessToken, dispatch]);

  useEffect(() => {
    if (myInfo) {
      alert("로그인 되었습니다.");
      dispatch(setLoginModalClose());
    }
  }, [myInfo, history , dispatch]);
  
  return (
    <>
      { modal && modal.login && modal.show && (
        <LoginModal onSignIn={onSignIn} /> 
      )}

      { modal && modal.register && modal.show && (
        <RegisterModal /> 
      )}
    </>
  );
};

export default withRouter(ModalContainer);
