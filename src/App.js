import React from "react";
import { AuthProvider } from "./Controllers/authController";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Views/Pages/Login/login";
import Register from "./Views/Pages/Register/register";
import Dashboard from "./Views/Pages/Dashboard/viewBugs";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </AuthProvider>
    </Router>
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
      </Routes>
    </>
  )}
</Router>;
 */
