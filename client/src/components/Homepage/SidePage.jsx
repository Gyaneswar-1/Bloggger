import React, { useEffect } from "react";
import { Button } from "@chakra-ui/react";

function SidePage({ pfp, name, bio }) {
  return (
    <div>
      <div className="h-fit bg-zinc-200 p-4 mb-4 rounded-sm">
        <div className="best-picks flex flex-col items-start gap-2">
          <div className="user-info flex flex-row gap-3 rounded-full">
            <img
              src={pfp}
              alt="User"
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
            <p>{name}</p>
          </div>
          <h1>{bio ? bio : ""}</h1>
          <button className="text-green-600 p-2 rounded-md font-semibold">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default SidePage;
