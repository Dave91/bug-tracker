import React from "react";

export default function ViewSection(props) {
  const data = props.bug;
  return (
    <>
      <h5>Version: {data.version}</h5>
      <h5>Details: {data.details}</h5>
      <h5>Steps: {data.steps}</h5>
      <h4>Created by: {data.creator}</h4>
      <h4>Assigned to: {data.assigned}</h4>
    </>
  );
}
