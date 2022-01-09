import React, { useState } from "react";
import "./Authorization.scss";
import Modal from "../../shared/Modal";

export default function Authorization() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onChangeInput = ({ target }) => {
    const { name, value } = target;

    if (name === "login") return setLogin(value);
    return setPassword(value);
  };

  const preSubmit = evt => {
    evt.preventDefault();

    if (login.trim() === "" || password.trim() === "")
      return alert("Ohhh... You have some empty label.");

    console.log({ login, password });
    setLogin("");
    setPassword("");
    return null;
  };

  return (
    <Modal urlHandleClose="/events">
      <form onSubmit={preSubmit} className="authorizationForm">
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
          <button type="submit">Log in</button>
          <button type="submit">Sign up</button>
        </div>
      </form>
    </Modal>
  );
}
