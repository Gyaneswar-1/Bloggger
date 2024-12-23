import React from "react";
import { useNavigate } from "react-router-dom";

function Aboutus() {
  const navigate = useNavigate();

  return (
    <div className="text-white flex p-40 text-3xl max-h-screen">
      <h1>
        <p class="mb-3 text-gray-500 dark:text-gray-400">
          About Us Welcome to Bloggger a place where ideas come to life, stories
          inspire, and knowledge flows freely. Our mission is to create a space
          that sparks curiosity, fosters creativity, and builds a community of
          like-minded individuals eager to learn, share, and grow. Founded by
          Gyaneswar
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          with a love for writing and innovation, our blog covers a wide range
          of topics including technology, lifestyle, education, and personal
          growth. Each article is crafted with care to inform, engage, and
          resonate with our diverse audience. At Bloggger, we believe in the
          power of words to make a difference.
        </p>
        <button
          type="button"
          class="mt-6 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2  "
          onClick={() => {
            navigate("/welcome");
            s;
          }}
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
          <span class="sr-only"></span>
        </button>
      </h1>
    </div>
  );
}

export default Aboutus;

{
  (" ");
}
// <span className="text-green-400">Gyaneswar Rout</span>  Whether you’re here
// to discover new insights, explore trends, or simply unwind with a good
// read, we’re here to make your experience worthwhile. Thank you for being
// part of our journey. Let's explore the world of ideas together! Stay
// curious, stay inspired.
// <br />
