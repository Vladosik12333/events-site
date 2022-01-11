import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { actions } from "./index";

const filter = createReducer("", {
  [actions.filter]: (_, payload) => payload,
});

const allEvents = createReducer([], {
  [actions.filter]: (state, payload) => [...state, payload],
});

const events = combineReducers({
  allEvents,
  filter,
});

export default events;
