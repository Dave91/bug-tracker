import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { getBugs } from "../../Controllers/Redux/bugSlice";
import BugCard from "../Components/BugCard/bugCard";
import BugView from "../Components/BugView/bugView";

export default () => {
  const [displayBug, setDisplayBug] = useState({
    name: "",
    isDisplayed: false,
  });
  const dispatch = useDispatch();
  const { bugs } = useSelector((state) => state);

  useEffect(() => {
    //dispatch(getBugs());
  }, [bugs.length < 1]);

  function bugClicked(name) {
    setDisplayBug({
      isDisplayed: !displayBug.isDisplayed,
      name: name,
    });
  }

  return (
    <div className="page-cont">
      {bugs.map((bug, key) => {
        return <BugCard key={key} bug={bug} clicked={bugClicked} />;
      })}
      {displayBug.isDisplayed && (
        <BugView
          clicked={bugClicked}
          bug={bugs.filter((bug) => bug.name === displayBug.name)[0]}
        />
      )}
    </div>
  );
};
