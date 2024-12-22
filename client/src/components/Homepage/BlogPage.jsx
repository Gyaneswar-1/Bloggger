import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getBlogByID,
  getUserProfileData,
} from "../../services/apiManage.service";

import { CloseButton, Spinner, Text, VStack } from "@chakra-ui/react";

const BlogPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [user, setUser] = useState({});
  const [showComment, setShowComment] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [like, setLike] = useState(0);
  const [showBlog, setShowBlog] = useState(true);
  async function getData() {
    const blogData = await getBlogByID(id);
    const userData = await getUserProfileData(blogData[0].user_id);
    if (blogData != null && userData != null) {
      setShowBlog(false);
    }
    setBlog(blogData[0]);
    setUser(userData);
  }

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div>
      {showBlog ? (
        <div className="flex justify-center items-center pt-[20%]">
          <VStack colorPalette="green.100">
            <Spinner color="green.100" />
            <Text color="green.100">Loading...</Text>
          </VStack>
        </div>
      ) : (
        <div>
          <div className="flex justify-center bg-zinc-800 text-white h-fit">
            <div className="flex flex-col bg-zinc-800 max-w-[920px] p-4">
              <div>
                <CloseButton
                  size="lg"
                  onClick={() => {
                    navigate("/home/main");
                  }}
                />
              </div>
              <div className="pt-4">
                <h1 className="text-5xl font-Times">{blog.title}</h1>
              </div>
              <div className="userinfo pt-5 flex gap-3 items-center justify-start">
                <div className="userPfps items-center rounded-full">
                  <img
                    src={user.pfp}
                    alt={user.username}
                    className="rounded-full h-11 w-11 object-cover"
                  />
                </div>
                <div className="user-text flex flex-col">
                  <div className="flex gap-2">
                    <h1>{user.username}</h1>
                    <p>●</p>
                  </div>
                  <div>
                    {new Date(blog.created_at).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </div>
              <div className=" pt-8">
                <hr />
                <div className="logos pt-6 pb-6 flex justify-between">
                  <div className="left-logo flex gap-7">
                    <div className="like flex gap-1 justify-center items-center">
                      <button
                        onClick={() => {
                          setIsLike(!isLike), setLike(like + 1);
                        }}
                      >
                        {isLike ? (
                          <i className="ri-heart-line "></i>
                        ) : (
                          <i className="ri-heart-fill text-red-500"></i>
                        )}
                      </button>
                      <p>{like}</p>
                    </div>
                    <div className="like flex gap-1 justify-center items-center">
                      <button>
                        <i className="ri-chat-4-line "></i>
                      </button>
                      <p>34</p>
                    </div>
                  </div>
                  <div className="right-logo">
                    <div className="like flex gap-7 justify-center items-center">
                      <button>
                        <i className="ri-share-line"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
              <div className="image pt-8 h-1/4 w-full cursor-pointer">
                <img
                  class="h-full w-full"
                  src={blog.images}
                  alt="image description"
                />
              </div>
              <div className="content-text pt-20 text-lg font-serif">
                {blog.content}
              </div>
            </div>
          </div>

          <footer className="rounded-lg shadow m-4 bg-black">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2023{" "}
                <a href="https://flowbite.com/" className="hover:underline">
                  Flowbite™
                </a>
                . All Rights Reserved.
              </span>
              <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                  <a className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                  <a className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                  <a className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                  <a className="hover:underline">Contact</a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
