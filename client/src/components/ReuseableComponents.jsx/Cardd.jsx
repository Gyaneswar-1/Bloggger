import React, { useState } from "react";

function Cardd(props) {
  const [color,setColor] = useState("#000000");

  const updateColor = () =>{
    setColor("#ff0000")
  } 

  const { title, content, images, username, created_at,userpfp } = props;
  return (
    <div className="cardd bg-emerald-200 shadow-2xl  overflow-hidden w-[700px] h-[240px] ml-4 mr-4 flex flex-row-reverse justify-between">
      <div className="image h-60 w-60 overflow-hidden p-4 ">
        <img src={images} alt={title} className="h-full w-full object-cover " />
      </div>
      <div className="p-4 items-start">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{content}</p>
        <hr className="border-gray-300 mb-4 w-full" />
        <div className="flex items-center ">
          <div className="avatar h-10 w-10 rounded-full overflow-hidden mr-3">
            <img
              src={userpfp}
              alt={username}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-gray-900 font-medium">{username}</p>
            <p className="text-gray-500 text-sm">
              {new Date(created_at).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="iteractive_element flex gap-6 pt-6">
          <div className="save">
           <button onClick={updateColor}>
           <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill={color}
            >
              <path d="M200-120v-640q0-33 23.5-56.5T280-840h240v80H280v518l200-86 200 86v-278h80v400L480-240 200-120Zm80-640h240-240Zm400 160v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
            </svg>
           </button>
          </div>
          <div className="like">
           <button onClick={updateColor}>
           <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill={color}
            >
              <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
            </svg>
           </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardd;
