import React from "react";
import "./bugEditPanel.css";

export default function EditPanel(props) {
  const bug = props.bug;
  return (
    <div className="edit-panel">
      <button className="panel-btn delete" onClick={props.deleteClicked}>
        Delete
      </button>
      <button className="panel-btn" onClick={props.editClicked(bug)}>
        Edit
      </button>
    </div>
  );
}
