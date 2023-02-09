import React, { useState } from "react";
import "./bugForm.css";

export default function BugForm() {
  const [bugObject, setBugObject] = useState("");

  function inputChanged(e) {
    setBugObject({
      ...bugObject,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <form className="bug-form">
      {/* {props.title === "Edit Bug" && (
        <button className="close-btn" onClick={props.close}>
          Close
        </button>
      )} */}
      <h2>Create Bug</h2>
      <div className="form-fields">
        <label for="name">Name (required):</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="bug name"
          onChange={inputChanged}
        ></input>
        <label for="details">Details (required):</label>
        <textarea
          id="details"
          name="details"
          required
          placeholder="bug description"
          onChange={inputChanged}
        ></textarea>
        <label for="steps">Steps:</label>
        <textarea
          id="steps"
          name="steps"
          placeholder="steps to recreate bug"
          onChange={inputChanged}
        ></textarea>
        <label for="version">App Version:</label>
        <input
          id="version"
          name="version"
          placeholder="app version"
          onChange={inputChanged}
        ></input>
        <label for="priority">Priority (required):</label>
        <select id="priority" name="priority" required onChange={inputChanged}>
          <option value="high">high</option>
          <option value="mid">mid</option>
          <option value="low">low</option>
        </select>
        <label for="assigned">Assigned to:</label>
        <select id="assigned" name="assigned" onChange={inputChanged}>
          <option>admin</option>
        </select>
      </div>
      <div className="form-actions">
        <button type="submit" className="form-button">
          Create Bug
        </button>
      </div>
    </form>
  );
}
