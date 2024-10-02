import React, { useState, useEffect } from "react";
import HomeEx from "./components/Homepage/HomeEx";
import UserSignUpEx from "./components/SignInSignUp/UserSignUpEx";
import axios from "axios";
// import UserInfopage from "./components/UserInfoPage/UserInfopage";
// import './app.css';

function App() {
  const getApi = async () => {
  
  }

  useEffect(() => {
    getApi();
  }, []);

  const registered = true;
  return (
    <div className="bg-emerald-50 h-full w-full">
      {registered ? <UserSignUpEx /> : <HomeEx />}
      {/* <button
        className="bg-green-950 text-white rounded-md text-3xl p-3 m-3"
        onClick={changeState}
      >
        click me to change
      </button> */}
    </div>
  );
}

export default App;
