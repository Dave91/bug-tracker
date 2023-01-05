import React, { useState, useRef } from "react";
import { useAuth } from "../../../Controllers/authController";
import "./sidebar.css";

export default () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { logoutAuth } = useAuth();

  async function logoutClicked(e) {
    try {
      setError("");
      setLoading(true);
      await logoutAuth();
    } catch {
      setError("Error: logout has failed.");
    }
    setLoading(false);
  }

  return (
    <div className="sidebar">
      <div className="sidebar-btn">HOME</div>
      <div className="sidebar-btn">SEARCH</div>
      <div className="sidebar-btn">USER</div>
      <div className="sidebar-btn">PROFILE</div>
    </div>
  );
};
