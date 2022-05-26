import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { RootState } from "../../modules";
import {  checkMyInfo, login } from "../../modules/auth";
import { setLoginModalClose } from "@modules/modal";
import { ModalInfo, MyInfo } from "src/App";
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
    } catch (e) {
      console.log(e);
    }
  };

  const onSignUp = (email : string, password : string , nickName : string , company : string) => {
    if (!email || !password) {
      alert("다시 입력해주세요.!");
      return;
    }
    // const data = await client({
    //   url: "/user/create",
    //   method: "post",
    //   data: {
    //     email: email,
    //     password: password,
    //     company: company,
    //     nickname: nickName,
    //   },
    // });
    // // 로그인 에러 캐칭
    // if (data.data.error) {
    //   return;
    // }

    alert("회원가입 성공");

    dispatch(setLoginModalClose());
  }

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
