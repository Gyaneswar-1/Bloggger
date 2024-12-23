import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getUserId } from "../../services/authService";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
  Box,
  Button,
} from "@chakra-ui/react";

function Navbar(props) {
  const data = getUserId();
  const { id } = props;
  const navigate = useNavigate();
  const initRef = React.useRef();
  return (
    <div className=" pb-16 text-white">
      <nav className=" border-gray-200 bg-zinc-800">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="../../src/assets/Icons/LOGO.png"
              className="h-8"
              alt="Blogger logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Bloggger
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="avatar flex gap-10 items-center rounded-full cursor-pointer">
              <button
                type="button"
                className="flex gap-1 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none "
                onClick={() => {
                  navigate("/home/user/postnewblog");
                }}
              >
                <i className="ri-chat-new-fill"></i>
                Post Blog
              </button>

              <Popover
                closeOnBlur={false}
                placement="left"
                initialFocusRef={initRef}
              >
                {({ isOpen, onClose }) => (
                  <>
                    <PopoverTrigger>
                      <img
                        src={data.pfp}
                        alt=""
                        className="rounded-full h-12 w-12 object-cover"
                      />
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent>
                        <PopoverHeader>{data.username}</PopoverHeader>
                        <PopoverCloseButton />
                        <PopoverBody>
                          <Box>{data.bio}</Box>
                        </PopoverBody>
                        <PopoverFooter>
                          {new Date(data.created_at).toLocaleString()}
                        </PopoverFooter>
                        <PopoverContent color="blue">
                          {data.email}
                        </PopoverContent>
                      </PopoverContent>
                    </Portal>
                  </>
                )}
              </Popover>
            </div>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white bg-zinc-800 md:dark:bg-zinc-800 dark:border-zinc-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                  aria-current="page"
                >
                  <NavLink className="" to="/home/main">
                    {(e) => {
                      return (
                        <span
                          className={[e.isActive ? "text-green-700 " : ""].join(
                            ""
                          )}
                        >
                          Home
                        </span>
                      );
                    }}
                  </NavLink>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <NavLink className="" to="/home/search">
                    {(e) => {
                      return (
                        <span
                          className={[e.isActive ? "text-green-700 " : ""].join(
                            ""
                          )}
                        >
                          Search
                        </span>
                      );
                    }}
                  </NavLink>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <NavLink className="" to="/home/trending">
                    {(e) => {
                      return (
                        <span
                          className={[e.isActive ? "text-green-700 " : ""].join(
                            ""
                          )}
                        >
                          Trending
                        </span>
                      );
                    }}
                  </NavLink>
                </a>
              </li>
              <li>
                <div className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  <NavLink className="" to="/home/user">
                    {(e) => {
                      return (
                        <span
                          className={[e.isActive ? "text-green-700" : ""].join(
                            ""
                          )}
                        >
                          User
                        </span>
                      );
                    }}
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
