import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { RootState } from "../../modules";
import {  checkMyInfo, login } from "../../modules/auth";
import LoginModal from "@components/common/LoginModal";
import RegisterModal from "@components/common/RegisterModal";
import { setLoginModalClose } from "@modules/modal";
import { ModalInfo, MyInfo } from "src/App";

interface Props {
  myInfo : MyInfo | null, 
  accessToken : string ,
  modal : ModalInfo | null
}

const ModalContainer = ({myInfo , accessToken , modal} : Props) => {
  const dispatch = useDispatch();

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
    if (myInfo && modal && modal.show) {
      alert("로그인 되었습니다.");
      dispatch(setLoginModalClose());
    }
  }, [myInfo  ,modal , dispatch]);
  
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

export default  connect((state: RootState) => {
  return {
    myInfo: state.auth.myInfo,
    accessToken : state.auth.accessToken,
    modal : state.modal.modalInfo,
  };
})(ModalContainer);
