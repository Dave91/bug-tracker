import React, { useState, useRef } from "react";
import { useAuth } from "../../../Controllers/authController";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/sidebar";
//import dbQuery from "../../../Controllers/dbQueries";

export default function Home() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { loginAuth } = useAuth();
  const navigate = useNavigate();

  const [displayBug, setDisplayBug] = useState({
    name: "",
    isDisplayed: false,
  });

  let dbData = "dbQuery";

  if (dbData) {
    dbData.forEach(function (bug) {
      // create a new div element for the bug
      let bugDiv = document.createElement("div");
      bugDiv.classList.add("bug-card");

      // create an h2 element for the bug title
      let bugTitle = document.createElement("h2");
      bugTitle.textContent = bug.title;

      // create a p element for the bug description
      let bugDescription = document.createElement("p");
      bugDescription.textContent = bug.description;

      // append the title and description to the bug div
      bugDiv.appendChild(bugTitle);
      bugDiv.appendChild(bugDescription);

      // append the bug div to the container element on the page
      document.getElementById("bug-container").appendChild(bugDiv);
    });
  } else {
    console.log("no data found");
  }

  /* useEffect(() => {
    dispatch(getBugs());
  }, [bugs.length < 1]); */

  function bugClicked(name) {
    setDisplayBug({
      isDisplayed: !displayBug.isDisplayed,
      name: name,
    });
  }

  return (
    <div className="page-cont">
      <Sidebar />
    </div>
  );
}
