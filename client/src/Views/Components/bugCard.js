import React, { useState, useEffect } from "react";
import "./bugCard.css";

export default function Card(props) {
  const bugData = props.bugData;
  const [bugClicked, setBugClicked] = useState(false);
  const [bugClickedData, setBugClickedData] = useState([]);

  const getClass = (bugClickedData, bugClicked, data) => {
    if (bugClickedData.bug_id === data.bug_id && bugClicked) {
      return data.bug_priority + " show";
    } else if (bugClicked) {
      return data.bug_priority + " hide";
    } else {
      return data.bug_priority;
    }
  };

  const editClicked = (bug) => {
    props.editClicked(bug);
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
            key={data.bug_id}
          >
            {bugClickedData.bug_id === data.bug_id && bugClicked && (
              <div className="edit-panel">
                <button
                  className="panel-btn delete"
                  onClick={() => props.deleteClicked(data.bug_id)}
                >
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
            <h2>Name: {data.bug_name}</h2>
            <h4>Priority: {data.bug_priority}</h4>
            <h4>Status: {data.bug_status}</h4>
            {bugClickedData.bug_id === data.bug_id && bugClicked && (
              <>
                <h5>Version: {data.bug_version}</h5>
                <h5>Details: {data.bug_details}</h5>
                <h5>Steps: {data.bug_steps}</h5>
                <h4>Created by: {data.bug_created}</h4>
                <h4>Assigned to: {data.bug_assigned}</h4>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
