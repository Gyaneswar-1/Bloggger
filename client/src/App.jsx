import React, { useState,useEffect } from "react";
import HomeEx from "./components/Homepage/HomeEx";
import UserSignUpEx from "./components/SignInSignUp/UserSignUpEx";
import axios from "axios";
// import UserInfopage from "./components/UserInfoPage/UserInfopage";
// import './app.css';



function App() {
  const [registered, isRegistered] = useState(true);

  const getApi = async () => {
    const api = "http://localhost:3000/api/v1/user/24";
    axios
      .get(api)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  useEffect(()=>{
    getApi();
  },[])

  const changeState = () => {
    isRegistered(false);
  };
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
