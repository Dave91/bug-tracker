import React, { useState, useEffect } from "react";
import "./bugCard.css";

export default function Card(props) {
  const bugData = props.bugData;
  const [bugClicked, setBugClicked] = useState(false);
  const [bugClickedData, setBugClickedData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [filtHigh, setFiltHigh] = useState(false);
  const [filtMid, setFiltMid] = useState(false);
  const [filtLow, setFiltLow] = useState(false);

  const getClass = (prior) => {
    if (
      (prior === "high" && filtHigh) ||
      (prior === "mid" && filtMid) ||
      (prior === "low" && filtLow)
    ) {
      return " hide";
    }
    return "";
  };

  const editClicked = (bug) => {
    props.editClicked(bug);
  };

  const toggleClicked = () => {
    setShowDetails(!showDetails);
    setBugClicked(false);
    setBugClickedData([]);
  };

  const cardActive = (data) => {
    setBugClicked(!bugClicked);
    setBugClickedData(data);
  };

  return (
    <div className="bug-cont">
      <div className="filter-panel">
        <img
          className={"toggle " + (showDetails ? " on" : "")}
          onClick={toggleClicked}
          alt="toggle"
        ></img>
        {showDetails && (
          <div className="filters">
            <button
              className={"filt-btn" + (!filtHigh ? " on" : "")}
              onClick={() => setFiltHigh(!filtHigh)}
            >
              high
            </button>
            <button
              className={"filt-btn" + (!filtMid ? " on" : "")}
              onClick={() => setFiltMid(!filtMid)}
            >
              mid
            </button>
            <button
              className={"filt-btn" + (!filtLow ? " on" : "")}
              onClick={() => setFiltLow(!filtLow)}
            >
              low
            </button>
            {/* <input type="checkbox"></input> */}
          </div>
        )}
      </div>
      {bugData.map((data) => {
        return (
          <div
            className={
              "bug-card " + data.bug_priority + getClass(data.bug_priority)
            }
            onClick={() => cardActive(data)}
            onMouseEnter={() => cardActive(data)}
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
