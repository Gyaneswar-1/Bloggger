import React from "react";
// import NavbarHandle from "../../utils/RoutersHandle";
import { BrowserRouter,NavLink } from "react-router-dom";


function Navbar(props) {
  const {id,pfp} = props; 
  console.log("user registered ",id);
  return (
      <div className="m-3 p-6">
        <div className="name-avatar flex flex-row justify-between">
          <h1 className="text-5xl font-playfair italic">Bloggger</h1>
          <div className="avatar h-14 w-14 flex ">
            <img src="https://via.placeholder.com/150" alt="" className=""/>
          </div>
        </div>
        <div className="real-nav flex place-items-center flex-col">
          <nav className="flex pt-9 pb-6 mr-9 ml-9 mt-5 mb-0 justify-center " >
            <NavLink className='pl-14 pr-14 text-2xl ' to="/home/main">
            {(e)=>{return <span className={[e.isActive ? "font-bold underline italic ":"opacity-80"].join("")}>Home</span>}}
            </NavLink>
            <NavLink className='pl-14 pr-14 text-2xl ' to="/home/search">
            {(e)=>{return <span className={[e.isActive ? "font-bold underline italic ":"opacity-80"].join("")}>Search</span>}}
            </NavLink>
            <NavLink className='pl-14 pr-14 text-2xl ' to="/home/trending">
            {(e)=>{return <span className={[e.isActive ? "font-bold underline italic ":"opacity-80"].join("")}>Trending</span>}}
            </NavLink>
            <NavLink className='pl-14 pr-14 text-2xl ' to="/home/user">
            {(e)=>{return <span className={[e.isActive ? "font-bold underline italic ":"opacity-80"].join("")}>User</span>}}
            </NavLink>
          </nav>
          <hr className="h-[0.09rem]  rounded-full w-5/6 bg-black mb-8" />
          {/* <NavbarHandle/> */}
        </div>
      </div>
  );
}

export default Navbar;