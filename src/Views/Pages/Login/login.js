import React, { useState } from "react";
import { signIn } from "../../../Controllers/authSlice";

import "./login.css";

export default () => {
  const [formInput, setFormInput] = useState({
    name: "",
    password: "",
  });

  function inputChanged(e) {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  }

  function submit(e) {
    //dispatch(signIn(formInput));
    e.preventDefault();
  }

  return (
    <div className="login-bg">
      <form className="login-panel">
        <h1>Login:</h1>
        <input
          name="email"
          placeholder="E-mail"
          onChange={inputChanged}
          value={formInput.email}
        ></input>
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={inputChanged}
          value={formInput.password}
        ></input>
        <button type="submit" onClick={submit}>
          Login
        </button>
      </form>
    </div>
  );
};
