import React, { useState } from "react";
import { useDispatch } from "react-redux";
import BugModel from "../../../Models/bugModel";
import EditPanel from "../BugEditDelete/bugEditPanel";
import BugEdit from "../BugCreateEdit/bugForm";
import ViewSection from "./component/bugViewSection";
//import { markComplete } from "../../../Controllers/Redux/bugSlice";
import "./bugView.css";

export default (props) => {
  const dispatch = useDispatch();
  const bug = new BugModel(props.bug);
  const [displayEdit, setDisplayEdit] = useState(false);

  function editClicked() {
    setDisplayEdit(!displayEdit);
  }

  function deleteClicked() {}

  return (
    <>
      <div className="bug-view">
        <EditPanel editClicked={editClicked} deleteClicked={deleteClicked} />
        <button className="close-btn" onClick={props.clicked}>
          Close
        </button>
        <h1>{bug.name}</h1>
        <ViewSection title="Details" info={bug.details} />
        <ViewSection title="Steps" info={bug.steps} />
        <ViewSection title="Priority" info={bug.priority} />
        <ViewSection title="Creator" info={bug.creator} />
        <ViewSection title="Version" info={bug.version} />
        <ViewSection title="Time" info={bug.time} />
        <button
          onClick={() => {
            //dispatch(markComplete());
          }}
        >
          Mark as Completed
        </button>
      </div>
      {displayEdit && (
        <BugEdit title="Edit Bug" bug={bug} close={editClicked} />
      )}
    </>
  );
};
