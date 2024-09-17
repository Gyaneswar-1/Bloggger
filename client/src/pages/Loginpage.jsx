import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Register from "./Register";
import { useForm } from "react-hook-form";

function Loginpage() {
  const [login, isLogin] = useState(true);

  return (
    <div className="p-5 flex justify-around flex-wrap h-screen  bg-zinc-900">
      <div className="self-center left-section text-white">
        <h1 className="text-7xl pt-8 ">The blogger</h1>
        <h3 className="text-2xl pt-8 ">Add your blogs</h3>
      </div>
      <div className="self-center bg-zinc-800  right-section flex flex-col p-12 h-fit w-1/4 rounded-xl">
        <div className="navs flex justify-around">
          <button
            onClick={() => isLogin(!login)}
            className="text-bold text-3xl h-16 w-40 bg-blue-600 m-1 rounded-md text-white"
          >
            {login ? "Login" : "Register"}
          </button>
        </div>
        {login ? (
          <>
            {" "}
            <input
              className="p-4 rounded-md m-4 text-xl bg-zinc-700"
              type="email"
              placeholder="email"
            />
            <input
              className="p-4 rounded-md m-4 text-xl bg-zinc-700"
              type="password"
              placeholder="password"
            />
          </>
        ) : (
          <>
            <input
              className="p-4 rounded-md m-4 text-xl bg-zinc-700"
              type="email"
              placeholder="email"
            />
            <input
              className="p-4 rounded-md m-4 text-xl bg-zinc-700"
              type="username"
              placeholder="username"
            />
            <input
              className="p-4 rounded-md m-4 text-xl bg-zinc-700"
              type="password"
              placeholder="password"
            />
            <input
              className="p-4 rounded-md m-4 text-xl bg-zinc-700"
              type="password"
              placeholder="confirm password"
            />
          </>
        )}

        <div className="flex flex-row justify-between other-inputs pl-4 text-white">
          <div className="left flex flex-row gap-3">
            {login ? (
              ""
            ) : (
              <>
                {" "}
                <input type="checkbox" className="bg-blue-600 " />
                <p>remember me</p>
              </>
            )}
          </div>
          {login ? (
            <>
              {" "}
              <a href="" className="text-blue-500 text-semibold mr-4">
                Forget password?
              </a>
            </>
          ) : (
            "s"
          )}
        </div>
        <button className="bg-blue-600 p-4 m-4 rounded-md text-white">
          {login ? "SIGN IN" : "SIGN UP"}
        </button>
      </div>
    </div>
  );
}

export default Loginpage;
