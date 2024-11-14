import React from "react";
import { useNavigate } from "react-router-dom";

function Aboutus() {
    const navigate = useNavigate();
  return (
    <div className="text-white flex p-40 text-3xl max-h-screen">
      <h1>
        About Us Welcome to <span className="text-green-400"> Bloggger </span> –
        a place where ideas come to life, stories inspire, and knowledge flows
        freely. Our mission is to create a space that sparks curiosity, fosters
        creativity, and builds a community of like-minded individuals eager to
        learn, share, and grow. Founded by{" "}
        <span className="text-green-400">Gyaneswar Rout</span> with a love for
        writing and innovation, our blog covers a wide range of topics including
        technology, lifestyle, education, and personal growth. Each article is
        crafted with care to inform, engage, and resonate with our diverse
        audience. At <span className="text-green-400">Bloggger</span>, we
        believe in the power of words to make a difference. Whether you’re here
        to discover new insights, explore trends, or simply unwind with a good
        read, we’re here to make your experience worthwhile. Thank you for being
        part of our journey. Let's explore the world of ideas together! Stay
        curious, stay inspired.
        <br />
        <br />
        <hr />
        <br />
        <div className="flex justify-between">
          <div>
            The <span className="text-green-400">Bloggger</span> Team
          </div>
            <button onClick={()=>{
                navigate("/welcome")
            }} 
            className="bg-rose-700 pl-4 pr-4 pb-1 rounded-md"
            > ⨯ </button>
        </div>
      </h1>
    </div>
  );
}

export default Aboutus;
