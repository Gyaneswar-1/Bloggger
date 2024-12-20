import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import DeleteBlogs from "../Homepage/DeleteBlogs";
import Editblog from "../Homepage/Editblog";
import { useNavigate } from "react-router-dom";

function Cardd(props) {
  const navigate = useNavigate();
  const [showDeleteUser, setShowDeleteUser] = useState(false);
  const [showEditBlog, setShowEditBlog] = useState(false);
  const { id, title, content, images, username, created_at, userpfp } = props;

  return (
    <div className="cardd bg-zinc-800 shadow-2xl text-white rounded-sm overflow-hidden w-[700px] h-[240px] ml-4 mr-4 flex flex-row-reverse justify-between">
      <div className="image h-60 w-1/2 overflow-hidden">
        {images ? (
          <img
            src={images}
            alt={title}
            className="rounded-sm h-full w-full object-cover cursor-pointer"
            onClick={() => {
              navigate(`/home/blog/${id}`);
            }}
          />
        ) : (
          <div className="h-full w-full bg-gray-300 flex items-center justify-center">
            <span>No Image</span>
          </div>
        )}
      </div>
      <div className="p-4 items-start ">
        <h3
          className="text-xl font-bold mb-2 cursor-pointer"
          onClick={() => {
            navigate(`/home/blog/${id}`);
          }}
        >
          {title}
        </h3>
        <p
          className=" mb-4 cursor-pointer"
          onClick={() => {
            navigate(`/home/blog/${id}`);
          }}
        >
          {content.substring(0, 100)}
        </p>
        {/* <hr className="border-gray-300 mb-4 w-full" /> */}
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
              <p className=" font-medium">{username}</p>
            ) : (
              <Button
                className="m-2"
                colorScheme="yellow"
                color="black"
                onClick={() => {
                  setShowEditBlog(!showEditBlog);
                }}
              >
                edit
              </Button>
            )}
            {username ? (
              <p className="text-gray-500 text-sm">
                {new Date(created_at).toLocaleDateString()}
              </p>
            ) : (
              <div> </div>
            )}
          </div>
        </div>
      </div>
      {showDeleteUser && <DeleteBlogs id={id} />}
      {showEditBlog && navigate(`/home/blog/edit/${id}`)}
    </div>
  );
}

export default Cardd;
