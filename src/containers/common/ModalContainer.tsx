import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { RootState } from "../../modules";
import {  checkMyInfo, login , register } from "../../modules/auth";
import { setLoginModalClose } from "@modules/modal";
import { ModalInfo, MyInfo } from "@models/index";
import LoginModal from "@components/auth/LoginModal";
import RegisterModal from "@components/auth/RegisterModal";

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
    } catch (e : any) {
      throw Error(e);
    }
  };

  const onSignUp = (email : string, password : string , nickName : string , company : string) => {

    try {
      dispatch(register({email , password , nickName , company}))
    } catch (e : any) {
      throw Error(e);
    }

    dispatch(setLoginModalClose());
  }

  useEffect(() => {
    if (accessToken) {
      dispatch(checkMyInfo());
    }
  }, [accessToken, dispatch]);

  useEffect(() => {
    if (myInfo && modal && modal.show) {
      dispatch(setLoginModalClose());
    }
  }, [myInfo  ,modal , dispatch]);
  
  return (
    <>
      { modal && modal.login && modal.show && (
        <LoginModal onSignIn={onSignIn} /> 
      )}

      { modal && modal.register && modal.show && (
        <RegisterModal onSignUp={onSignUp} /> 
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
