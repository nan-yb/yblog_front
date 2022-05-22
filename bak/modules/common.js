const initialState = {
  email: null,
  nickname: null,
  authYn: null,
};

const SET_USER = "SET_USER";

export const setUser = (user, token) => ({
  type: SET_USER, // 액션 객체에는 type 값이 필수입니다.
  user,
  token,
});

export default function user(state = initialState, action) {
  // state 의 초깃값을 initialState 로 지정했습니다.
  switch (action.type) {
    case SET_USER:
      if (action.token) {
        localStorage.setItem("token", action.token);
      } else {
        localStorage.removeItem("token");
      }

      return {
        ...state,
        email: action.user.email,
        nickname: action.user.nickname,
        authYn: action.user.authYn,
      };

    default:
      return state;
  }
}
