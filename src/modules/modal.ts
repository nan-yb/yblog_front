import { ActionFunctionAny, createAction } from "redux-actions";
import { createReducer } from "typesafe-actions";
import {  ModalInfo } from "@models/index";
import { Action } from "redux";

const SET_LOGIN_MODAL_DIRECT_LOGIN = "modal/SET_LOGIN_MODAL_DIRECT_LOGIN";
const SET_LOGIN_MODAL_DIRECT_REGISTER = "modal/SET_LOGIN_MODAL_DIRECT_REGISTER";
const SET_LOGIN_MODAL_CLOSE = "modal/SET_LOGIN_MODAL_CLOSE";

export const setLoginModalDirectLogin : ActionFunctionAny<Action<any>> = createAction(SET_LOGIN_MODAL_DIRECT_LOGIN);
export const setLoginModalDirectRegister : ActionFunctionAny<Action<any>> = createAction(SET_LOGIN_MODAL_DIRECT_REGISTER);
export const setLoginModalClose : ActionFunctionAny<Action<any>> = createAction(SET_LOGIN_MODAL_CLOSE);


export interface ModalState {
  modalInfo : ModalInfo | null;
}

const initialState: ModalState = {
  modalInfo : null
};

const modal = createReducer(
  initialState,
  {
    [SET_LOGIN_MODAL_DIRECT_LOGIN]: (state) => ({
      ...state,
      modalInfo : {
        show: true,
        login : true,
        register : false,
      }
    }),
    [SET_LOGIN_MODAL_DIRECT_REGISTER]: (state) => ({
      ...state,
      modalInfo : {
        show: true,
        login : false,
        register : true,
      }
    }),
    [SET_LOGIN_MODAL_CLOSE]: (state) => ({
      ...state,
      modalInfo : {
        show: false,
        login : false,
        register : false,
      }
    }),
  },
);

export default modal;
