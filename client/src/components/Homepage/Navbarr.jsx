import React from "react";
import NavbarHandle from "../../utils/NavbarHandle";
import { BrowserRouter,NavLink } from "react-router-dom";


function Navbar() {
  return (
    <BrowserRouter>
      <div className="m-3 p-6">
        <div className="name-avatar flex flex-row">
          <h1 className="text-5xl font-playfair italic">Bloggger</h1>
          <div className="avatar h-6 w-6">
            <img src="" alt="" />
          </div>
        </div>
        <div className="real-nav flex place-items-center flex-col">
          <nav className="flex p-9 mr-9 ml-9 mt-5 mb-4 justify-center" >
            <NavLink className='pl-14 pr-14 text-2xl ' to="/home">
            {(e)=>{return <span className={[e.isActive ? "font-bold":""].join("")}>Home</span>}}
            </NavLink>
            <NavLink className='pl-14 pr-14 text-2xl ' to="/search">
            {(e)=>{return <span className={[e.isActive ? "font-bold":""].join("")}>Search</span>}}
            </NavLink>
            <NavLink className='pl-14 pr-14 text-2xl ' to="/trending">
            {(e)=>{return <span className={[e.isActive ? "font-bold":""].join("")}>Trending</span>}}
            </NavLink>
            <NavLink className='pl-14 pr-14 text-2xl ' to="/user">
            {(e)=>{return <span className={[e.isActive ? "font-bold":""].join("")}>User</span>}}
            </NavLink>
          </nav>
          <hr className="h-1 rounded-full w-5/6 bg-slate-500 mb-8" />
          <NavbarHandle/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Navbar;