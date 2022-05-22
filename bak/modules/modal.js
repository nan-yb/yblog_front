const initialState = {
  login: { show: false, directLogin: false },
  register: { show: false, directRegister: false },
  otp: { show: false },
  writing: false,
};

const SET_LOGIN_MODAL_OPEN = "SET_LOGIN_MODAL_OPEN";
const SET_LOGIN_MODAL_DIRECT_LOGIN = "SET_LOGIN_MODAL_DIRECT_LOGIN";
const SET_LOGIN_MODAL_DIRECT_REGISTER = "SET_LOGIN_MODAL_DIRECT_REGISTER";
const SET_LOGIN_MODAL_CLOSE = "SET_LOGIN_MODAL_CLOSE";
const SET_WRITING_MODAL_STATE = "SET_WRITING_MODAL_STATE";

// modal
export const setLoginModalOpen = () => ({
  type: SET_LOGIN_MODAL_OPEN, // 액션 객체에는 type 값이 필수입니다.
});

export const setLoginModaldirectLogin = () => ({
  type: SET_LOGIN_MODAL_DIRECT_LOGIN, // 액션 객체에는 type 값이 필수입니다.
});

export const setLoginModalDirectRegister = () => ({
  type: SET_LOGIN_MODAL_DIRECT_REGISTER, // 액션 객체에는 type 값이 필수입니다.
});
export const setLoginModalClose = () => ({
  type: SET_LOGIN_MODAL_CLOSE, // 액션 객체에는 type 값이 필수입니다.
});
export const setWritingModalState = () => ({
  type: SET_WRITING_MODAL_STATE, // 액션 객체에는 type 값이 필수입니다.
});

export default function modal(state = initialState, action) {
  // state 의 초깃값을 initialState 로 지정했습니다.

  const SET_LOGIN_MODAL_OPEN = "SET_LOGIN_MODAL_OPEN";
  const SET_LOGIN_MODAL_DIRECT_LOGIN = "SET_LOGIN_MODAL_DIRECT_LOGIN";
  const SET_LOGIN_MODAL_DIRECT_REGISTER = "SET_LOGIN_MODAL_DIRECT_REGISTER";
  const SET_LOGIN_MODAL_CLOSE = "SET_LOGIN_MODAL_CLOSE";
  const SET_WRITING_MODAL_STATE = "SET_WRITING_MODAL_STATE";

  switch (action.type) {
    case SET_LOGIN_MODAL_OPEN:
      return {
        ...state,
        login: {
          show: true,
          directLogin: true,
        },
        register: {
          directRegister: false,
        },
      };
    case SET_LOGIN_MODAL_DIRECT_LOGIN:
      return {
        ...state,
        login: {
          directLogin: true,
        },
        register: {
          directRegister: false,
        },
      };
    case SET_LOGIN_MODAL_DIRECT_REGISTER:
      return {
        ...state,
        login: {
          show: true,
          directLogin: false,
        },
        register: {
          directRegister: true,
        },
      };
    case SET_LOGIN_MODAL_CLOSE:
      return {
        ...state,
        login: {
          directLogin: false,
        },
        register: {
          directRegister: true,
        },
      };
    case SET_WRITING_MODAL_STATE:
      return {
        ...state,
        writing: action.display,
      };

    default:
      return state;
  }
}
