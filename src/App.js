import React from "react";
import { AuthProvider } from "./Controllers/authController";
import Login from "./Views/Pages/Login/login";
import Register from "./Views/Pages/Register/register";
import ViewBugs from "./Views/Pages/viewBugs";
import Sidebar from "./Views/Components/Sidebar/sidebar";
import CreateBug from "./Views/Components/BugCreateEdit/bugForm";

function App() {
  return (
    <AuthProvider>
      <Register />
    </AuthProvider>
  );
}

export default App;

/* <Router>
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
</Router>;
 */
