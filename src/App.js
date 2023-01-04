import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Views/Pages/Login/login";
import Sidebar from "./Views/Components/Sidebar/sidebar";
import ViewBugs from "./Views/Pages/viewBugs";
import CreateBug from "./Views/Components/BugCreateEdit/bugForm";

function App() {
  const { auth } = useSelector((state) => state);
  return (
    <Router>
      {!auth ? (
        <Login />
      ) : (
        <>
          <Sidebar />
          <Routes>
            <Route path="/viewbugs">
              <ViewBugs />
            </Route>
            <Route path="/create">
              <div className="page-cont">
                <CreateBug title="Create Bug" />
              </div>
            </Route>
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
