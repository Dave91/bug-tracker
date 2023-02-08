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

  /* useEffect(() => {
    dispatch(getBugs());
  }, [bugs.length < 1]); */

  function Clicked(name) {
    setDisplayBug({
      isDisplayed: !displayBug.isDisplayed,
      name: name,
    });
  }

  return (
    <div className="page-cont">
      <Menubar />
      <Card />
    </div>
  );
}
