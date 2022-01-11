import React, { useEffect, useState } from "react";
import "./Authorization.scss";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Modal from "../../shared/Modal";
import { usersAPI } from "../../../redux/services";
import { actions } from "../../../redux/users";

export default function Authorization() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const [registerUser, { data, isSuccess }] =
    usersAPI.useRegisterUserMutation();
  const [getStatusAuth, { data: dataAuth, isSuccess: isSuccessAuth }] =
    usersAPI.useGetStatusAuthMutation();

  const clearInputs = () => {
    setLogin("");
    setPassword("");
  };

  const checkInputs = () => {
    const status = login.trim() === "" || password.trim() === "";

    if (status) {
      alert("Ohhh... You have some empty label.");
      return status;
    }

    return status;
  };

  useEffect(() => {
    if (!isSuccessAuth) return null;

    if (dataAuth?.authorization === true) {
      alert(`${login}, you are authorized.`);
      dispatch(actions.changeUserId(dataAuth?.id));
      dispatch(actions.changeUserName(dataAuth?.login));
      history.push("/cabinet");
      clearInputs();
      return null;
    }

    if (dataAuth?.authorization === false) {
      alert(`Login or password is incorrect.`);
      return null;
    }

    alert(`Oooops... We have an unknown error: ${dataAuth?.message}`);
    clearInputs();

    return null;
  }, [dataAuth]);

  useEffect(() => {
    if (!isSuccess) return null;

    if (data?.message === "User Register") {
      alert(`${login}, you are registered.`);
      dispatch(actions.changeUserId(data?.id));
      dispatch(actions.changeUserName(data?.login));
      history.push("/cabinet");
      clearInputs();
      return null;
    }

    if (data?.message === "Validation error") {
      alert(`Oooops... this login (${login}) is busy.`);
      return null;
    }

    if (data?.message === "Data too long for column 'login' at row 1") {
      alert(`Oooops... You have a very long login.`);
      return null;
    }

    alert(`Oooops... We have an unknown error: ${data?.message}`);
    clearInputs();
    return null;
  }, [data]);

  const onChangeInput = ({ target }) => {
    const { name, value } = target;

    if (name === "login") return setLogin(value);
    return setPassword(value);
  };

  const onLogin = evt => {
    evt.preventDefault();

    if (checkInputs()) return null;

    getStatusAuth({ login, password });

    return null;
  };

  const onRegister = evt => {
    evt.preventDefault();

    if (checkInputs()) return null;

    registerUser({ login, password });

    return null;
  };

  return (
    <Modal urlHandleClose="/events">
      <form className="authorizationForm">
        <input
          type="text"
          value={login}
          name="login"
          placeholder="Login"
          onChange={onChangeInput}
        />
        <input
          type="password"
          value={password}
          name="password"
          placeholder="Password"
          onChange={onChangeInput}
        />
        <div className="buttons">
          <button type="button" onClick={onLogin}>
            Log in
          </button>
          <button type="button" onClick={onRegister}>
            Sign up
          </button>
        </div>
      </form>
    </Modal>
  );
}
