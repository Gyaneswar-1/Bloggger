import React, { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import IntropageFooter from "../ReuseableComponents.jsx/IntropageFooter";

function WelcomePage() {
  return (
    <>
      <div className="h-screen w-screen">
        <div className="fixed">
          <nav className=" pl-24 pr-14 p-4 flex flex-row justify-between">
            <h1 className="text-6xl  font-playfair ">Bloggger</h1>
            <div className="side-menu font-CosmicNeue flex flex-row items-center">
              <button className="ml-4 mr-4 text-2xl desktop:block ">Get started</button>
              <button className="ml-4 mr-4 text-2xl tablet:hidden desktop:block mobile:hidden">about us</button>
              <button className="ml-4 mr-4 text-2xl tablet:hidden desktop:block mobile:hidden">Memebership</button>
              <button className="ml-4 mr-4 p-2 pl-3 pr-3 text-2xl bg-emerald-600 border-2 border-emerald-600 rounded-full text-white  hover:bg-emerald-800 hover:border-emerald-800 tablet:hidden desktop:block mobile:hidden">
                Login in
              </button>
              <button className="ml-4 mr-4 p-2 pl-3 pr-3 text-2xl border-2 border-emerald-600 rounded-full text-emerald-600 hover:text-emerald-800 hover:border-emerald-800 tablet:hidden desktop:block mobile:hidden">
                Sign in
              </button>
            </div>
          </nav>
          <hr className="h-[1px] bg-black opacity-100 mb-6 w-screen" />
        </div>
        <main className=" mb-80 w-screen">
          <div className="pl-28 pt-[13%] gap-16 flex flex-col">
            <h1 className="desktop:text-8xl mobile:text-4xl font-playfair">
              Share Informtion <br />& Grow
            </h1>
            <h3 className="desktop:text-4xl mobile:text-2xl font-CosmicNeue">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </h3>
            <button className="bg-emerald-800 text-white pl-8 pr-8 p-5 desktop:text-3xl mobile:text-xl rounded-full w-fit hover:bg-emerald-950">
              Get Started
            </button>
          </div>
        </main>
        <footer className="fixed bottom-0 w-full">
          <IntropageFooter />
        </footer>
      </div>
    </>
  );
}

export default WelcomePage;
