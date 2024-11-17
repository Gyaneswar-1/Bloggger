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
                    <button className="text-green-600 font-semibold">
                      Follow
                    </button>
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="28px"
                          viewBox="0 -960 960 960"
                          width="28px"
                          fill="000000"
                        >
                          <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                        </svg>
                      </button>
                      <p>12</p>
                    </div>
                    <div className="like flex gap-1 justify-center items-center">
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="28px"
                          viewBox="0 -960 960 960"
                          width="28px"
                          fill="000000"
                        >
                          <path d="M240-400h480v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z" />
                        </svg>
                      </button>
                      <p>34</p>
                    </div>
                  </div>
                  <div className="right-logo">
                    <div className="like flex gap-7 justify-center items-center">
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="28px"
                          viewBox="0 -960 960 960"
                          width="28px"
                          fill="000000"
                        >
                          <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
                        </svg>
                      </button>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="28px"
                          viewBox="0 -960 960 960"
                          width="28px"
                          fill="000000"
                        >
                          <path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm480-280q17 0 28.5-11.5T720-760q0-17-11.5-28.5T680-800q-17 0-28.5 11.5T640-760q0 17 11.5 28.5T680-720Zm0 520ZM200-480Zm480-280Z" />
                        </svg>
                      </button>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="28px"
                          viewBox="0 -960 960 960"
                          width="28px"
                          fill="000000"
                        >
                          <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
              <div
                className="image pt-8 h-1/4 w-full cursor-pointer"
                
              >
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
