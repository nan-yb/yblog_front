import { combineReducers } from "redux";
import modal from "./modal";
import user from "./user";
import board from "./board";

const rootReducer = combineReducers({
  user,
  modal,
  board,
});

export default rootReducer;
