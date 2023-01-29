import React from "react";
import "./bugViewSection.css";

export default (props) => {
  return (
    <div className="view-sect">
      <h2>{props.title}</h2>
      <p>{props.info}</p>
    </div>
  );
};
