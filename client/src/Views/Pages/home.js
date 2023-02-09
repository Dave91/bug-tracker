import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Menubar from "../Components/Menubar/menubar";
import Card from "../Components/BugCard/bugCard";
import "./home.css";

export default function Home() {
  const [displayBug, setDisplayBug] = useState({
    name: "",
    isDisplayed: false,
  });

  const editClicked = (bug) => {
    console.log("Bug edited: " + bug.name + " " + bug.priority);
  };

  return (
    <div className="page-cont">
      <Menubar />
      <Card editClicked={editClicked} />
    </div>
  );
}
