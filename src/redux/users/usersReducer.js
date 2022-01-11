import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { actions } from "./index";

const userName = createReducer("", {
  [actions.changeUserName]: (_, { payload }) => payload,
});

const userId = createReducer(null, {
  [actions.changeUserId]: (_, { payload }) => payload,
});

const users = combineReducers({
  userName,
  userId,
});

export default users;
