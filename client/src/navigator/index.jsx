import { Route, Routes } from "react-router-dom";

import React from 'react'
import Login from "../pages/login";
import Home from "../pages/home";
import SignUp from "../pages/signUp";
import ForgotPassword from "../pages/forgotPassword";

const Navigator = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
  )
}

export default Navigator