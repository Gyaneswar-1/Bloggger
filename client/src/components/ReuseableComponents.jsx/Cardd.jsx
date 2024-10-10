import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { deleteBlog } from "../../services/apiManage.service";
import DeleteBlogs from "../Homepage/DeleteBlogs";
import DeleteUserPage from "../Homepage/DeleteUserPage";

function Cardd(props) {
  const [color, setColor] = useState("#000000");
  const [showDeleteUser, setShowDeleteUser] = useState(false);

  const updateColor = () => {
    setColor("#ff0000");
  };

  const { id, title, content, images, username, created_at, userpfp } = props;

  return (
    <div className="cardd bg-zinc-200 shadow-2xl overflow-hidden w-[700px] h-[240px] ml-4 mr-4 flex flex-row-reverse justify-between">
      <div className="image h-60 w-60 overflow-hidden p-4">
        {images ? (
          <img
            src={images}
            alt={title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-gray-300 flex items-center justify-center">
            <span>No Image</span>
          </div>
        )}
      </div>
      <div className="p-4 items-start">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{content}</p>
        <hr className="border-gray-300 mb-4 w-full" />
        <div className="flex items-center">
          <div className="">
            {username ? (
              <div className="avatar h-10 w-10 rounded-full overflow-hidden mr-3">
                <img
                  src={userpfp}
                  alt={username}
                  className="h-full w-full object-cover"
                />
              </div>
            ) : (
              // <div className="h-full w-full bg-gray-300 flex items-center justify-center">
              //   <span> </span>
              // </div>
              <div>
                <Button
                  className="m-2"
                  colorScheme="red"
                  onClick={() => {
                    setShowDeleteUser(!showDeleteUser);
                  }}
                >
                  Delete
                </Button>
              </div>
            )}
          </div>
          <div>
            {username ? (
              <p className="text-gray-900 font-medium">{username}</p>
            ) : (
              <Button className="m-2" colorScheme="yellow" color="black">
                edit
              </Button>
            )}
            {username ? (
              <p className="text-gray-500 text-sm">
                {new Date(created_at).toLocaleDateString()}
              </p>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="iteractive_element flex gap-6 pt-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#000000"
          >
            <path d="M240-144v-600q0-29.7 21.15-50.85Q282.3-816 312-816h336q29.7 0 50.85 21.15Q720-773.7 720-744v600l-240-96-240 96Zm72-107 168-67 168 67v-493H312v493Zm0-493h336-336Z" />
          </svg>
        </div>
      </div>
      {showDeleteUser && <DeleteBlogs id={id} />}
    </div>
  );
}

export default Cardd;
