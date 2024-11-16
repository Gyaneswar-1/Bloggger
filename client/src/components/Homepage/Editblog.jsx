import React from "react";
import { useNavigate } from "react-router-dom";

function Editblog() {
  const navigate = useNavigate();
  return (
    <div className="bg-white">
      <button
        onClick={() => {
          navigate("/home/user");
        }}
        className="bg-fuchsia-600 p-4 m-3 rounded-2xl text-white"
      >
        click em
      </button>
      Editblog
    </div>
  );
}

export default Editblog;
