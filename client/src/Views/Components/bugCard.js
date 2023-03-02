import React, { useState, useEffect } from "react";
import "./bugCard.css";

export default function Card(props) {
  const bugData = props.bugData;
  const [bugClicked, setBugClicked] = useState(false);
  const [bugClickedData, setBugClickedData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const priors = ["high", "mid", "low"];
  const [filts, setFilts] = useState(priors);

  const filterClicked = (prior) => {
    if (filts.includes(prior)) {
      setFilts(filts.filter((f) => f !== prior));
    } else {
      setFilts([...filts, prior]);
    }
  };

  const editClicked = (bug) => {
    props.editClicked(bug);
  };

  const cardActive = (data) => {
    setBugClicked(!bugClicked);
    setBugClickedData(data);
  };

  return (
    <div className="bug-cont">
      <div className="filter-panel">
        <div className="filters">
          {priors.map((prior) => (
            <button
              className={"filt-btn" + (filts.includes(prior) ? " on" : "")}
              onClick={() => filterClicked(prior)}
              key={prior}
            >
              {prior}
            </button>
          ))}
        </div>
      </div>
      {bugData.map((data) => {
        return (
          <div
            className={
              "bug-card " +
              data.bug_priority +
              (filts.includes(data.bug_priority) ? "" : " hide")
            }
            onClick={() => cardActive(data)}
            //onMouseEnter={() => cardActive(data)}
            onMouseLeave={() => setBugClicked(false)}
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
            {(showDetails
              ? showDetails
              : bugClickedData.bug_id === data.bug_id && bugClicked) && (
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
