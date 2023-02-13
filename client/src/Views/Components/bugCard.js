import React, { useState, useEffect } from "react";
//import { bugs, dataJSON } from "../../../data/data";
import "./bugCard.css";

export default function Card(props) {
  const bugData = props.bugData;
  const [bugClicked, setBugClicked] = useState(false);
  const [bugClickedData, setBugClickedData] = useState([]);

  const getClass = (bugClickedData, bugClicked, data) => {
    if (bugClickedData.id === data.id && bugClicked) {
      return data.priority + " show";
    } else if (bugClicked) {
      return data.priority + " hide";
    } else {
      return data.priority;
    }
  };

  const editClicked = (data) => {
    props.editClicked(data);
  };

  const deleteClicked = () => {
    console.log("Bug deleted: " + bugClickedData.name);
  };

  return (
    <div className="bug-container">
      {bugData.map((data) => {
        return (
          <div
            className={"bug-card " + getClass(bugClickedData, bugClicked, data)}
            onClick={() => {
              setBugClicked(!bugClicked);
              setBugClickedData(data);
            }}
            key={data.id}
          >
            {bugClickedData.id === data.id && bugClicked && (
              <div className="edit-panel">
                <button className="panel-btn delete" onClick={deleteClicked}>
                  Delete
                </button>
                <button
                  className="panel-btn"
                  onClick={() => editClicked(bugClickedData)}
                >
                  Edit
                </button>
              </div>
            )}
            <h2>Name: {data.name}</h2>
            <h4>Priority: {data.priority}</h4>
            <h4>Status: {data.status}</h4>
            {bugClickedData.id === data.id && bugClicked && (
              <>
                <h5>Version: {data.version}</h5>
                <h5>Details: {data.details}</h5>
                <h5>Steps: {data.steps}</h5>
                <h4>Created by: {data.creator}</h4>
                <h4>Assigned to: {data.assigned}</h4>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
