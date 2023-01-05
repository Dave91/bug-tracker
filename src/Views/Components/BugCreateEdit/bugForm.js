import React, { useState } from "react";
import "./bugForm.css";
import BugModel from "../../../Models/bugModel";

export default (props) => {
  const [bugObject, setBugObject] = useState(new BugModel(props.bug));

  function inputChanged(e) {
    setBugObject({
      ...bugObject,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="bug-create">
      {props.title === "Edit Bug" && (
        <button className="close-btn" onClick={props.close}>
          Close
        </button>
      )}
      <h1>{props.title}</h1>
      <form>
        <label>Name:</label>
        <input
          name="name"
          placeholder="bug name"
          required
          onChange={inputChanged}
          value={bugObject.name}
        ></input>
        <label>Details:</label>
        <textarea
          name="details"
          placeholder="bug description"
          required
          onChange={inputChanged}
          value={bugObject.details}
        ></textarea>
        <label>Steps:</label>
        <textarea
          name="steps"
          placeholder="steps to recreate bug"
          required
          onChange={inputChanged}
          value={bugObject.steps}
        ></textarea>
        <label>Priority:</label>
        <select
          name="priority"
          required
          onChange={inputChanged}
          value={bugObject.priority}
        >
          <option value="1">High</option>
          <option value="2">Mid</option>
          <option value="3">Low</option>
        </select>
        <label>Assigned to:</label>
        <select
          name="assigned"
          onChange={inputChanged}
          value={bugObject.assigned}
        >
          <option>Admin</option>
        </select>
        <label>App Version:</label>
        <input
          name="version"
          placeholder="app version"
          onChange={inputChanged}
          value={bugObject.version}
        ></input>
        <button type="submit">{props.title}</button>
      </form>
    </div>
  );
};
