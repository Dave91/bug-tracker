import React from "react";
import { AuthProvider } from "./Controllers/authController";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Views/Pages/login";
import Register from "./Views/Pages/register";
import Home from "./Views/Pages/home";

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
