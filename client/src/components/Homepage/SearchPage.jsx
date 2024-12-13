import React from "react";
import Navbar from "./Navbarr";
import { Button } from "@chakra-ui/react";

function SearchPage() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center bg-black">
        <div className="flex justify-center items-center p-2 gap-3 rounded-full">
          <input
            type="text"
            placeholder="Search Blog"
            className="rounded-full p-3 pl-5 w-[450px]"
          />
          <Button  className="" colorScheme="green">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#ffffff"
              className="fill"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
