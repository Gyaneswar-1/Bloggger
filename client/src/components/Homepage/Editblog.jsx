import React from "react";
import { useNavigate } from "react-router-dom";

function Editblog() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/home/user");
        }}
      >
        click em
      </button>
      Editblog
    </div>
  );
}

export default Editblog;
