import React, { useState } from "react";
import SignUp from "./SignUp";
import Register from "./Register";
import IntropageFooter from "../ReuseableComponents.jsx/IntropageFooter";
import { useToast } from "@chakra-ui/react";
import { CloseButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate()
  const toast = useToast();
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);

  return (
    <>
      <div className="h-screen w-screen bg-black">
        <div className="fixed w-full">
          <nav className="pl-24 pr-14 p-4 flex flex-row justify-between bg-black ">
            <h1 className="text-6xl font-playfair text-white ">Bloggger</h1>
            <div className="side-menu font-CosmicNeue flex flex-row items-center text-white">
              <button className="ml-4 mr-4 text-2xl "
              onClick={()=>navigate("/aboutus")}
              >About us</button>
              <button className="ml-4 mr-4 text-2xl ">Membership</button>
              <button
                className="ml-4 mr-4 p-2 pl-3 pr-3 text-2xl bg-green-400 border-2 border-green-400 rounded-full text-white hover:bg-emerald-800 hover:border-emerald-800 "
                onClick={() => setLogin(!login)}
              >
                Register
              </button>
              <button
                className="ml-4 mr-4 p-2 pl-3 pr-3 text-2xl border-2 border-green-400 rounded-full text-green-400 hover:text-green-50 hover:border-green-50"
                onClick={() => setSignUp(!signUp)}
              >
                Sign in
              </button>
            </div>
          </nav>
          <hr className="h-[1px] bg-black opacity-100 mb-6 w-screen" />
        </div>
        <main className="mb-80 w-screen ">
          <div className="pl-28 pt-[13%] gap-16 flex flex-col">
            <h1 className="text-8xl font-playfair text-white ">
              Share Information <br /> &
              <span className=" text-green-400  "> Grow</span>
            </h1>
            <h3 className="text-4xl font-CosmicNeue text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </h3>
            <button
              className="bg-green-400 pl-8 pr-8 p-4 text-3xl rounded-full w-fit hover:bg-green-200"
              onClick={() => setLogin(!login)}
            >
              Get Started
            </button>
          </div>
        </main>
          <IntropageFooter />
      </div>

      {login && (
        <div className="fixed inset-0 text-white flex items-center justify-center backdrop-blur-md bg-black bg-opacity-70 w-full ">
          <div className="bg-zinc-800 p-8 rounded-xl shadow-lg h-5/6 w-2/5">
            <h1 className="text-5xl text-center font-playfair">
              Join to Blogger
            </h1>
            <CloseButton
              size="lg"
              className="absolute inset-y-0 right-0 w-16 text-white"
              onClick={() => setLogin(false)}
            />
            <Register />
            <p className="text-wrap text-center pt-10">
              Click “Register” to agree to Blogger’s Terms of Service and
              acknowledge that Medium’s Privacy Policy applies to you.
            </p>
          </div>
        </div>
      )}

      {signUp && (
        <div className="fixed inset-0 text-white flex items-center justify-center backdrop-blur-md bg-black bg-opacity-70 ">
          <div className="bg-zinc-800 p-8 rounded-xl shadow-lg h-5/6 w-2/5">
            <h1 className="text-5xl text-center font-playfair"></h1>
            <CloseButton
              size="lg"
              className="absolute inset-y-0 right-0 w-16 text-white"
              onClick={() => setSignUp(false)}
            />
            <SignUp />
            <p className="text-wrap text-center pt-10">
              Click “Sign up” to agree to Blogger’s Terms of Service and
              acknowledge that Medium’s Privacy Policy applies to you.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default WelcomePage;
