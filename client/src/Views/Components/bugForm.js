import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./bugForm.css";

export default function BugForm(props) {
  const currUser = props.currUser;
  const editBug = props.editBug;
  const [initNeeded, setInitNeeded] = useState(true);
  const [bugObject, setBugObject] = useState("");
  const nameRef = useRef();
  const detailsRef = useRef();
  const stepsRef = useRef();
  const versionRef = useRef();
  const priorityRef = useRef();
  const assignedRef = useRef();

  useEffect(() => {
    if (props.formTitle === "Edit Bug" && editBug && initNeeded) {
      nameRef.current.value = editBug.bug_name;
      detailsRef.current.value = editBug.bug_details;
      stepsRef.current.value = editBug.bug_steps;
      versionRef.current.value = editBug.bug_version;
      priorityRef.current.value = editBug.bug_priority;
      assignedRef.current.value = editBug.bug_assigned;
      setInitNeeded(false);
    }
  }, []);

  function inputChanged(e) {
    let newObj = {
      bug_id: editBug.bug_id || undefined,
      bug_name: nameRef.current.value,
      bug_details: detailsRef.current.value,
      bug_steps: stepsRef.current.value,
      bug_version: versionRef.current.value,
      bug_priority: priorityRef.current.value,
      bug_status: assignedRef.current.value ? "assigned" : "unassigned",
      bug_assigned: 1,
      bug_created: "user",
    };
    setBugObject(newObj);
  }

  //EDIT BUG
  async function editSubmit() {
    try {
      await axios.post("http://localhost:5000/bugs/edit", bugObject);
      props.updPage();
    } catch (error) {
      console.log(error);
    }
  }

  //CREATE BUG
  async function createSubmit() {
    try {
      await axios.post("http://localhost:5000/bugs/add", bugObject);
      props.updPage();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className="bug-form">
      <h2>{props.formTitle}</h2>
      <div className="form-fields">
        <label>Name (required):</label>
        <input
          id="name"
          type="text"
          required
          placeholder="bug name"
          ref={nameRef}
          onChange={inputChanged}
        ></input>
        <label>Details (required):</label>
        <textarea
          id="details"
          required
          placeholder="bug description"
          ref={detailsRef}
          onChange={inputChanged}
        ></textarea>
        <label>Steps:</label>
        <textarea
          id="steps"
          placeholder="steps to recreate bug"
          ref={stepsRef}
          onChange={inputChanged}
        ></textarea>
        <label>App Version:</label>
        <input
          id="version"
          placeholder="app version"
          ref={versionRef}
          onChange={inputChanged}
        ></input>
        <label>Priority (required):</label>
        <select
          id="priority"
          required
          ref={priorityRef}
          onChange={inputChanged}
        >
          <option>high</option>
          <option>mid</option>
          <option>low</option>
        </select>
        <label>Assigned to:</label>
        <select id="assigned" ref={assignedRef} onChange={inputChanged}>
          <option>admin</option>
        </select>
      </div>
      <div className="form-actions">
        <button
          type="submit"
          className="form-button"
          onClick={props.formTitle === "Create Bug" ? createSubmit : editSubmit}
        >
          {props.formTitle}
        </button>
      </div>
    </form>
  );
}
