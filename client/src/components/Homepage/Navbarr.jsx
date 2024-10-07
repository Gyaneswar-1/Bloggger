import React from "react";
import { BrowserRouter,NavLink } from "react-router-dom";
import { getUserId } from "../../services/authService";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'


function Navbar(props) {
  const data = getUserId();
  const {id} = props; 
  console.log("user registered ",id);
  return (
      <div className="m-3 p-1">
        <div className="name-avatar flex flex-row justify-between">
          <h1 className="text-4xl font-playfair italic">Bloggger</h1>
          <div className="avatar h-14 w-14 flex rounded-full cursor-pointer" onClick={()=>showDrawer(()=>{

          })} >
            <img src={data.pfp} alt="" className="rounded-full"/>
          </div>
        </div>
        <div className="real-nav flex place-items-center flex-col">
          <nav className="flex pt-2 pb-6 mr-9 ml-9 mb-0 justify-center " >
            <NavLink className='pl-14 pr-14 text-base' to="/home/main">
            {(e)=>{return <span className={[e.isActive ? "font-bold  italic bg-emerald-200 rounded-  p-2":"opacity-80"].join("")}>Home</span>}}
            </NavLink>
            <NavLink className='pl-14 pr-14 text-base' to="/home/search">
            {(e)=>{return <span className={[e.isActive ? "font-bold  italic bg-emerald-200 rounded-md p-2 ":"opacity-80"].join("")}>Search</span>}}
            </NavLink>
            <NavLink className='pl-14 pr-14 text-base' to="/home/trending">
            {(e)=>{return <span className={[e.isActive ? "font-bold  italic bg-emerald-200 rounded-md p-2":"opacity-80"].join("")}>Trending</span>}}
            </NavLink>
            <NavLink className='pl-14 pr-14 text-base' to="/home/user">
            {(e)=>{return <span className={[e.isActive ? "font-bold  italic bg-emerald-200 rounded-md p-2":"opacity-80"].join("")}>User</span>}}
            </NavLink>
          </nav>
          <hr className="h-[0.09rem]  rounded-full w-5/6 bg-black mb-8" />
          {/* <NavbarHandle/> */}
        </div>
      </div>
  );
}

export default Navbar;