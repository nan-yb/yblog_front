import { Link } from "react-router-dom";
import styles from "../assets/gnb.scss";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { setLoginModalOpen } from "../store/modal";
import { setUser } from "../store/user";

import LoginAndRegister from "../components/Modal/LoginAndRegister";

const Gnb = () => {
  const { user, modal } = useSelector(
    (state) => ({
      user: state.user,
      modal: state.modal,
    }),
    shallowEqual
  );

  let showAuthMenu = false;

  if (user.authYn === "Y") {
    showAuthMenu = true;
  }

  const dispatch = useDispatch();

  const onClickLoginButton = () => {
    if (!user.email) {
      dispatch(setLoginModalOpen());
      return;
    }

    logout();
  };

  const logout = () => {
    let user = {
      email: null,
      nickname: null,
      authYn: null,
    };

    dispatch(setUser(user));
    alert("로그아웃");
  };

  return (
    <div className={styles.navContainer}>
      <nav>
        <div className="flex h-full items-center ">
          <Link to="/">
            <img
              src={require("../static/logo/main.png")}
              alt="블라인드 로고"
              width="150"
            />
          </Link>
        </div>

        <div className="flex h-full items-center">
          {showAuthMenu ? (
            <Link to="/admin">
              <button className="hover:bg-light-blue-200 hover:text-light-blue-800 group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-2 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
                관리자
              </button>
            </Link>
          ) : null}

          <Link to="/write">
            <button className="hover:bg-light-blue-200 hover:text-light-blue-800 group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-2  py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              글쓰기
            </button>
          </Link>

          {/* <Button
            onClickFn={onClickLoginButton}
            title={!user.email ? "로그인" : "로그아웃"}
            color={"blue"}
          /> */}
          <button
            onClick={onClickLoginButton}
            className="hover:bg-light-blue-200 hover:text-light-blue-800 group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-2 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {!user.email ? "로그인" : "로그아웃"}
          </button>

          <LoginAndRegister modal={modal} />
        </div>
      </nav>

      <hr />
    </div>
  );
};

export default Gnb;
