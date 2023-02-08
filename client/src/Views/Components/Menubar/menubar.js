import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Controllers/authController";
import BugForm from "../BugCreateEdit/bugForm";
import "./menubar.css";

export default function Menubar() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { logoutAuth } = useAuth();
  const navigate = useNavigate();

  const [showBugForm, setShowBugForm] = useState(false);
  function createClicked() {
    setShowBugForm(!showBugForm);
  }

  async function logoutClicked(e) {
    try {
      setError("");
      setLoading(true);
      await logoutAuth();
      navigate("/");
    } catch {
      setError("Error: logout has failed.");
    }
    setLoading(false);
  }

  return (
    <div className="menubar">
      {showBugForm ? (
        <>
          <div className="menubar-btn" onClick={createClicked}>
            Close Form
          </div>
          <div className="menubar-btn" onClick={logoutClicked}>
            Logout
          </div>
          <BugForm />
        </>
      ) : (
        <>
          <div className="menubar-btn">View Bugs</div>
          <div className="menubar-btn" onClick={createClicked}>
            Create Bug
          </div>
          <div className="menubar-btn" onClick={logoutClicked}>
            Logout
          </div>
        </>
      )}
    </div>
  );
}
