import React from "react";
import { AuthProvider } from "./Controllers/authController";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Views/Pages/Login/login";
import Register from "./Views/Pages/Register/register";
import Dashboard from "./Views/Pages/Dashboard/viewBugs";
import Home from "./Views/Pages/Dashboard/home";
//Home.js is for testing until Dashboard is ready

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<></>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
