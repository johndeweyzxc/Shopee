import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import React from "react";
import App from "./App";
import {Login} from "./Login";
import Register from "./Register";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
