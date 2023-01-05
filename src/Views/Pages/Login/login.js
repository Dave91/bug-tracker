import React, { useState, useRef } from "react";
import { useAuth } from "../../../Controllers/authController";
import "./login.css";

export default function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { loginAuth } = useAuth();

  async function submitClicked(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await loginAuth(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Error: login has failed.");
    }
    setLoading(false);
  }

  return (
    <div className="login-bg">
      <form className="login-panel" onSubmit={submitClicked}>
        <h1>Login:</h1>
        {error && <p>{error}</p>}
        <input
          name="email"
          type="email"
          placeholder="E-mail"
          ref={emailRef}
          required
        ></input>
        <input
          name="password"
          type="password"
          placeholder="Password"
          ref={passwordRef}
          required
        ></input>
        <button disabled={loading} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
