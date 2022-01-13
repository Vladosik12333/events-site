import { configureStore } from "@reduxjs/toolkit";
import events from "./events";
import { users } from "./users";
import { usersAPI, eventsAPI } from "./services";

export default configureStore({
  reducer: {
    events,
    users,
    [usersAPI.API.reducerPath]: usersAPI.API.reducer,
    [eventsAPI.API.reducerPath]: eventsAPI.API.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    usersAPI.API.middleware,
    eventsAPI.API.middleware,
  ],
});
