import React, { useState, useEffect } from "react";
import HomeEx from "../components/Homepage/HomeEx";
// import axios from "axios";
import { isAuthenticated } from "../services/authService";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Register from "../components/SignInSignUp/Register";
import WelcomePage from "../components/SignInSignUp/WelcomePage";
import SearchPage from "../components/Homepage/SearchPage";
import UserProfilePage from "../components/Homepage/UserProfilePage";
import Trendingpage from "../components/Homepage/Trendingpage";
import { getToken } from "../services/authService";

function RoutersHandle() {
  const token = getToken();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={token ? <HomeEx /> : <WelcomePage />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={isAuthenticated() ? <HomeEx /> : "Loding..."}
        />
        {/*<Navigate to="/login" />*/}
        {/* <Route path="/home/main" element={<HomeEx/>}/> */}
        <Route path="/home/main" element={<HomeEx />} />
        <Route path="/home/search" element={<SearchPage />} />
        <Route path="/home/user" element={<UserProfilePage />} />
        <Route path="/home/trending" element={<Trendingpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutersHandle;
