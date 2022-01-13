import { combineReducers, createReducer } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { actions } from "./index";

const userName = createReducer(Cookies.get("name") ?? "", {
  [actions.changeUserName]: (_, { payload }) => {
    if (payload === "") {
      Cookies.remove("name");
    } else {
      Cookies.set("name", payload);
    }
    return payload;
  },
});

const userId = createReducer(Cookies.get("id") ?? null, {
  [actions.changeUserId]: (_, { payload }) => {
    if (payload === null) {
      Cookies.remove("id");
    } else {
      Cookies.set("id", payload);
    }
    return payload;
  },
});

const users = combineReducers({
  userName,
  userId,
});

export default users;
