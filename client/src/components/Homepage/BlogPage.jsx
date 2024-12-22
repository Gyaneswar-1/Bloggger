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
                    {/* <button className="text-green-600 font-semibold">
                      Follow
                      </button> */}
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
                      <button>
                        <i class="ri-heart-line"></i>
                      </button>
                      <p>12</p>
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
                        <i class="ri-share-line"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
              <div className="image pt-8 h-1/4 w-full cursor-pointer">
                <img
                  src={blog.images}
                  alt=""
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="content-text pt-10 text-lg font-serif">
                {blog.content}
              </div>
            </div>
          </div>
          <footer className="bg-gray-800 text-white py-4 mt-4">
            <div className="container mx-auto text-center">
              <p>
                &copy; {new Date().getFullYear()} Your Blog Name. All rights
                reserved.
              </p>
              <p>
                <a
                  href="/privacy-policy"
                  className="text-green-400 hover:underline"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms-of-service"
                  className="text-green-400 hover:underline"
                >
                  Terms of Service
                </a>
              </p>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
