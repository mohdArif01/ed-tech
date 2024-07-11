import React, { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./Components/login";
import SignUp from "./Components/register";
import Profile from "./Components/profile";
import Nav from "./Components/navbar";
import Home from './Page/Home'

import { ToastContainer } from "react-toastify";
import { auth } from "./Components/firebase";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={user ? <Navigate to="/profile" /> : <Login />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
