import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/Homepage/HomePage";
import SearchPage from "../components/Homepage/SearchPage";
import TrendingPage from "../components/Homepage/TrendingPage";
import UserProfilePage from "../components/Homepage/UserProfilePage";

function NavbarHandle() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/user" element={<UserProfilePage />} />
      <Route path="/trending" element={<TrendingPage />} />
      <Route path="*" element={<HomePage />} /> {/* Default route */}
    </Routes>
  );
}

export default NavbarHandle;