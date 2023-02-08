import React, { useState, useEffect } from "react";
import axios from "axios";
//import { bugs, dataJSON } from "../../../data/data";
import BugView from "../../Components/BugView/bugView";
import "./bugCard.css";

export default function Card() {
  const [bugClicked, setBugClicked] = useState(false);
  const [bugClickedId, setBugClickedId] = useState("");
  const [bugData, setBugData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/bugs/all")
      .then((res) => setBugData(res.data));
  }, []);

  return (
    <div className="bug-container">
      {bugClicked && <BugView bug={bugClickedId} />}
      {bugData.map((data) => {
        return (
          <div
            className={
              "bug-card " +
              data.priority +
              (bugClickedId === data.id && bugClicked ? " show" : "")
            }
            onClick={() => {
              setBugClicked(!bugClicked);
              setBugClickedId(data.id);
            }}
            key={data.id}
          >
            <h2>{data.name}</h2>
            <h4>{data.priority}</h4>
            <h5>{data.version}</h5>
            <h5>{data.details}</h5>
            <h5>{data.steps}</h5>
            <h4>{data.creator}</h4>
            <h4>{data.assigned}</h4>
          </div>
        );
      })}
    </div>
  );
}
