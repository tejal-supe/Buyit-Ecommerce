import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import React from 'react'
import Login from "../pages/login";
import App from "../App";
import Home from "../pages/home";
import SignUp from "../pages/signUp";

const Navigator = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp/>}/>
      </Routes>
  )
}

export default Navigator