import React from "react";
import { NavLink,useNavigate } from "react-router-dom";
import { getUserId } from "../../services/authService";

function Navbar(props) {
  const data = getUserId();
  const { id } = props;
  const navigate = useNavigate();
  console.log("user registered ", id);
  return (
    <div className="m-3 p-1 ">
      <div className="name-avatar flex flex-row justify-between items-center w-full">
        <h1 className="text-4xl font-playfair italic">Bloggger</h1>
        <div className="avatar flex gap-10 items-center rounded-full cursor-pointer">
          <div className=" bg-emerald-700 flex justify-center items-center gap-3 text-white p-3" onClick={(()=>{
             navigate("/home/user/postnewblog")
          })}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#e8eaed"
            >
              <path d="M216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-30.11 21-51.56Q186-817 216-816h346l-72 72H216v528h528v-274l72-72v346q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm264-336Zm-96 96v-153l354-354q11-11 24-16t26.5-5q14.4 0 27.45 5 13.05 5 23.99 15.78L891-840q11 11 16 24.18t5 26.82q0 13.66-5.02 26.87-5.02 13.2-15.98 24.13L537-384H384Zm456-405-51-51 51 51ZM456-456h51l231-231-25-26-26-25-231 231v51Zm257-257-26-25 26 25 25 26-25-26Z" />
            </svg>
            Post Blog
          </div>
          <img src={data.pfp} alt="" className="rounded-full h-14 w-14" />
        </div>
      </div>
      <div className="real-nav flex place-items-center flex-col">
        <nav className="flex pt-2 pb-6 mr-9 ml-9 mb-0 justify-center ">
          <NavLink className="pl-14 pr-14 text-base" to="/home/main">
            {(e) => {
              return (
                <span
                  className={[
                    e.isActive
                      ? "font-bold  italic bg-emerald-200 p-2"
                      : "opacity-80",
                  ].join("")}
                >
                  Home
                </span>
              );
            }}
          </NavLink>
          <NavLink className="pl-14 pr-14 text-base" to="/home/search">
            {(e) => {
              return (
                <span
                  className={[
                    e.isActive
                      ? "font-bold  italic bg-emerald-200 p-2 "
                      : "opacity-80",
                  ].join("")}
                >
                  Search
                </span>
              );
            }}
          </NavLink>
          <NavLink className="pl-14 pr-14 text-base" to="/home/trending">
            {(e) => {
              return (
                <span
                  className={[
                    e.isActive
                      ? "font-bold  italic bg-emerald-200 p-2"
                      : "opacity-80",
                  ].join("")}
                >
                  Trending
                </span>
              );
            }}
          </NavLink>
          <NavLink className="pl-14 pr-14 text-base" to="/home/user">
            {(e) => {
              return (
                <span
                  className={[
                    e.isActive
                      ? "font-bold  italic bg-emerald-200 p-2"
                      : "opacity-80",
                  ].join("")}
                >
                  User
                </span>
              );
            }}
          </NavLink>
        </nav>
        <hr className="h-[0.09rem]  rounded-full w-5/6 bg-black mb-8" />
        {/* <NavbarHandle/> */}
      </div>
    </div>
  );
}

export default Navbar;
