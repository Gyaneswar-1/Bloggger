import React, { useEffect, useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import IntropageFooter from "../ReuseableComponents.jsx/IntropageFooter";
import { useToast } from "@chakra-ui/react";
import { CloseButton } from "@chakra-ui/react";

function WelcomePage() {
  const toast = useToast();
  const [login, setLogin] = useState(false);
  // useEffect(() => {
  //   toast({
  //     title: "तेरी माँ की चूत",
  //     description: "मेरा लंड चूसो",
  //     status: "success",
  //     duration: 9000,
  //     isClosable: true,
  //   });
  // }, []);

  return (
    <>
      <div className="h-screen w-screen">
        <div className="fixed w-full">
          <nav className="pl-24 pr-14 p-4 flex flex-row justify-between bg-emerald-50">
            <h1 className="text-6xl font-playfair">Bloggger</h1>
            <div className="side-menu font-CosmicNeue flex flex-row items-center">
              <button className="ml-4 mr-4 text-2xl">Get started</button>
              <button className="ml-4 mr-4 text-2xl">About us</button>
              <button className="ml-4 mr-4 text-2xl">Membership</button>
              <button
                className="ml-4 mr-4 p-2 pl-3 pr-3 text-2xl bg-emerald-600 border-2 border-emerald-600 rounded-full text-white hover:bg-emerald-800 hover:border-emerald-800 "
                onClick={() => setLogin(!login)}
              >
                Login in
              </button>
              <button className="ml-4 mr-4 p-2 pl-3 pr-3 text-2xl border-2 border-emerald-600 rounded-full text-emerald-600 hover:text-emerald-800 hover:border-emerald-800">
                Sign in
              </button>
            </div>
          </nav>
          <hr className="h-[1px] bg-black opacity-100 mb-6 w-screen" />
        </div>
        <main className="mb-80 w-screen ">
          <div className="pl-28 pt-[13%] gap-16 flex flex-col">
            <h1 className="text-8xl sm:text-4xl font-playfair">
              Share Information <br /> &{" "}
              <span className="animate-pulse">Grow</span>
            </h1>
            <h3 className="text-4xl sm:text-2xl font-CosmicNeue">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </h3>
            <button className="bg-emerald-800 text-white pl-8 pr-8 p-5 text-3xl sm:text-xl rounded-full w-fit hover:bg-emerald-950">
              Get Started
            </button>
          </div>
        </main>
        <footer className="fixed bottom-0 w-full">
          <IntropageFooter />
        </footer>
      </div>

      {login && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-black bg-opacity-70">
          <div className="bg-white p-8 rounded-lg shadow-lg h-5/6 w-3/4">
            <h1 className="text-5xl text-center font-playfair">Join to Blogger</h1>
            <CloseButton
              size="lg"
              className="absolute inset-y-0 right-0 w-16"
              onClick={() => setLogin(false)}
            />
            <Login />
            <p className="text-wrap text-center">Click “Sign up” to agree to Medium’s Terms of Service and acknowledge that Medium’s Privacy Policy applies to you.</p>
          </div>
        </div>
      )}
    </>
  );
}

export default WelcomePage;
