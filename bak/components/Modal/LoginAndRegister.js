import LoginModal from "./Login";
import RegisterModal from "./Register";

const LoginAndRegister = (modals) => {
  const modal = modals.modal;

  return (
    <div>
      {modal.login.show ? (
        <div className="modalOutside">
          <div className="loginModal">
            {modal.register.directRegister ? (
              <div className="foot">
                <RegisterModal />
              </div>
            ) : null}

            {modal.login.directLogin ? (
              <div className="foot">
                <LoginModal />
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default LoginAndRegister;
