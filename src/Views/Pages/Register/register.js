import React, { useState, useRef } from "react";
import { useAuth } from "../../../Controllers/authController";
import "./register.css";

export default function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const { signUp } = useAuth();

  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });

  function inputChanged(e) {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  }

  async function submitClicked(e) {
    e.preventDefault();
    try {
      setError("");
      await signUp(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Error: registration has failed.");
    }
  }

  return (
    <div className="login-bg">
      <form className="login-panel">
        <h1>Login:</h1>
        <input
          name="email"
          type="email"
          placeholder="E-mail"
          onChange={inputChanged}
          value={formInput.email}
          ref={emailRef}
          required
        ></input>
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={inputChanged}
          value={formInput.password}
          ref={passwordRef}
          required
        ></input>
        <button type="submit" onClick={submitClicked}>
          Login
        </button>
      </form>
    </div>
  );
}
