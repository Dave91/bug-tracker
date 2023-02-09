import React, { useState, useEffect } from "react";
import axios from "axios";
//import { bugs, dataJSON } from "../../../data/data";
import EditPanel from "../BugEditDelete/bugEditPanel";
import ViewSection from "../BugView/bugViewSection";
import "./bugCard.css";

export default function Card(props) {
  const [bugClicked, setBugClicked] = useState(false);
  const [bugClickedData, setBugClickedData] = useState([]);
  const [bugData, setBugData] = useState([]);

  const getClass = (bugClickedData, bugClicked, data) => {
    if (bugClickedData.id === data.id && bugClicked) {
      return "bug-card " + data.priority + " show";
    } else if (bugClicked) {
      return "bug-card " + data.priority + " hide";
    } else {
      return "bug-card " + data.priority;
    }
  };

  const editClicked = () => {
    //test
  };

  const deleteClicked = () => {
    console.log("Bug deleted: " + bugClickedData.name);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/bugs/all")
      .then((res) => setBugData(res.data));
  }, []);

  return (
    <div className="bug-container">
      {bugData.map((data) => {
        return (
          <div
            className={getClass(bugClickedData, bugClicked, data)}
            onClick={() => {
              setBugClicked(!bugClicked);
              setBugClickedData(data);
            }}
            key={data.id}
          >
            {bugClickedData.id === data.id && bugClicked && (
              <EditPanel
                bug={bugClickedData}
                editClicked={props.editClicked}
                deleteClicked={deleteClicked}
              />
            )}
            <h2>Name: {data.name}</h2>
            <h4>Priority: {data.priority}</h4>
            <h4>Status: {data.status}</h4>
            {bugClickedData.id === data.id && bugClicked && (
              <ViewSection bug={data} />
            )}
          </div>
        );
      })}
    </div>
  );
}
