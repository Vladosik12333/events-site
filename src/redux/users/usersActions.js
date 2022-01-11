import { createAction } from "@reduxjs/toolkit";

const changeUserName = createAction("users/userName");
const changeUserId = createAction("users/userId");

export default { changeUserName, changeUserId };
