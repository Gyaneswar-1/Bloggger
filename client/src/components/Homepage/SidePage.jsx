import React, { useEffect } from "react";
import { Button } from "@chakra-ui/react";

function SidePage({ pfp, name, bio }) {
  
  return (
    <div>
      <div className="h-fit w-fit bg-emerald-400 p-4">
        <div className="best-picks flex flex-col items-start gap-2">
          <div className="user-info flex flex-row gap-3 rounded-full">
            <img 
              src={pfp} 
              alt="User" 
              style={{ width: "50px", height: "50px", borderRadius: "50%" }} 
            />
            <p>{name}</p>
          </div>
          <h1>{bio ? bio : " "}</h1>
          <Button
            rounded="inherit"
            colorScheme="blue"
            variant="solid"
            size="sm"
          >
            Follow
          </Button>
        </div>
        <hr
          style={{
            backgroundColor: "black",
            height: "0.5px",
            border: "none",
            marginTop: "9px",
          }}
        />
      </div>
    </div>
  );
}

export default SidePage;