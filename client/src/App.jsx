import React from "react";
  import Loginpage from "./components/Loginpage/Loginpage";
  import Applogo from "./components/Loginpage/Applogo";

function App() {

  
  return (
    <div className= "bg-[url('./assets/background.svg')] bg-stone-400 flex justify-center items-center h-screen w-full flex-col">
      {/* <Testcomponent/> */}
      <div className="shadow-2xl bg-stone-100 p-5 m-4 rounded-xl h-fit w-fit">
      <Applogo/>
      <Loginpage />
      </div>
    </div>
  );
}

export default App;
