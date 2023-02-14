import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Controllers/authController";
import Card from "../Components/bugCard";
import BugForm from "../Components/bugForm";
import "./home.css";

export default function Home() {
  const [bugData, setBugData] = useState([]);
  const [currUser, setCurrUser] = useState(useAuth.currentUser);
  const { logoutAuth } = useAuth();
  const navigate = useNavigate();
  const [showBugForm, setShowBugForm] = useState(false);
  const [editBug, setEditBug] = useState([]);
  const [formTitle, setFormTitle] = useState("");

  const editClicked = (bug) => {
    setFormTitle("Edit Bug");
    setShowBugForm(true);
    setEditBug(bug);
  };

  const deleteClicked = async (id) => {
    try {
      await axios.delete("http://localhost:5000/bugs/del", id);
    } catch (error) {
      console.log(error);
    }
  };

  async function logoutClicked(e) {
    try {
      setCurrUser("");
      await logoutAuth();
      console.log("Logged out.");
      navigate("/");
    } catch {
      console.log("Error: logout has failed.");
    }
  }

  function closeForm() {
    setShowBugForm(false);
  }

  function openForm() {
    setFormTitle("Create Bug");
    setShowBugForm(true);
  }

  useEffect(() => {
    axios
      .get("http://localhost:5000/bugs/all")
      .then((res) => {
        setBugData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="page-cont">
      <div className="menubar">
        <div className="menubar-btn" onClick={closeForm}>
          View Bugs
        </div>
        <div className="menubar-btn" onClick={openForm}>
          Create Bug
        </div>
        <div className="menubar-btn" onClick={logoutClicked}>
          Logout
        </div>
      </div>
      {showBugForm ? (
        <BugForm editBug={editBug} currUser={currUser} formTitle={formTitle} />
      ) : (
        <Card
          bugData={bugData}
          editClicked={editClicked}
          deleteClicked={deleteClicked}
        />
      )}
    </div>
  );
}
