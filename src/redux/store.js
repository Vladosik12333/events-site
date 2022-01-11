import { configureStore } from "@reduxjs/toolkit";
import events from "./events";
import { users } from "./users";
import { usersAPI } from "./services";

const { API } = usersAPI;

export default configureStore({
  reducer: {
    events,
    users,
    [API.reducerPath]: API.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    API.middleware,
  ],
});
