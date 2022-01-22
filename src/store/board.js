const initialState = {
  confirm: false,
};

const SET_CREATE_BOARD = "SET_CREATE_BOARD";

export const setCreateBoard = (board) => ({
  type: SET_CREATE_BOARD, // 액션 객체에는 type 값이 필수입니다.
  board,
});

export default function board(state = initialState, action) {
  // state 의 초깃값을 initialState 로 지정했습니다.
  switch (action.type) {
    case SET_CREATE_BOARD:
      return {
        ...state,
        confirm: true,
      };

    default:
      return state;
  }
}
