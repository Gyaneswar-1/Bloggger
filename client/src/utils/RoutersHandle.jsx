import React, { useState, useEffect } from "react";
import HomeEx from "../components/Homepage/HomeEx";
// import axios from "axios";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Register from "../components/SignInSignUp/Register";
import WelcomePage from "../components/SignInSignUp/WelcomePage";
import SearchPage from "../components/Homepage/SearchPage";
import UserProfilePage from "../components/Homepage/UserProfilePage";
import Trendingpage from "../components/Homepage/Trendingpage";
import { getToken, isAuthenticated } from "../services/authService";
import PostnewBlogs from "../components/Homepage/PostnewBlogs";
import EditUser from "../components/Homepage/EditUser";

function RoutersHandle() {
  const token = getToken();
  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated() ? (
          <Route path="/" element={<HomeEx />} />
        ) : (
          <Route path="/" element={<WelcomePage />} />
        )}

        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={isAuthenticated() ? <HomeEx /> : "Loding..."} />
        {/*<Navigate to="/login" />*/}
        {/* <Route path="/home/main" element={<HomeEx/>}/> */}
        <Route path="/home/main" element={<HomeEx />} />
        <Route path="/home/search" element={<SearchPage />} />
        <Route path="/home/user" element={<UserProfilePage />} />
        <Route path="/home/user/postnewblog" element={<PostnewBlogs />} />
        <Route path="/home/user/edituser" element={<EditUser />} />
        <Route path="/home/main/postnewblog" element={<PostnewBlogs />} />
        <Route path="/home/trending" element={<Trendingpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutersHandle;
