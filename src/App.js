import React from "react";
import { AuthProvider } from "./Controllers/authController";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Views/Pages/Login/login";
import Register from "./Views/Pages/Register/register";
import Sidebar from "./Views/Components/Sidebar/sidebar";
import ViewBugs from "./Views/Pages/viewBugs";
import CreateBug from "./Views/Components/BugCreateEdit/bugForm";

function App() {
  return (
    <AuthProvider>
      <Router>
        {!true ? (
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
    </AuthProvider>
  );
}

export default App;
