import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { actions } from "./index";

const filter = createReducer("", {
  [actions.filter]: (_, { payload }) => payload,
});

const events = combineReducers({
  filter,
});

export default events;
