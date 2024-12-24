import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getBlogByID,
  getlike,
  likeblog,
  dislike,
  getUserProfileData,
} from "../../services/apiManage.service";

import { CloseButton, Spinner, Text, VStack } from "@chakra-ui/react";

const BlogPage = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  // const btnRef = React.useRef()

  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [user, setUser] = useState({});
  const [isLike, setIsLike] = useState(false);
  const [like, setLike] = useState(0);
  const [showBlog, setShowBlog] = useState(true);
  // const [date, setDate] = useState({});
  async function getData() {
    const blogData = await getBlogByID(id);
    const userData = await getUserProfileData(blogData[0].user_id);
    if (blogData != null && userData != null) {
      setShowBlog(false);
    }
    setBlog(blogData[0]);
    setUser(userData);
    // setDate(

    // );
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
        <div className="flex flex-col bg-zinc-700 items-center">
          <div class="relative flex flex-col items-center my-6 bg-zinc-700  shadow-sm rounded-lg w-full">
            <h6 class="mb-2 text-white text-4xl font-semibold text-center">
              {blog.title}{" "}
            </h6>
            <div class="relative h-[500px] m-2.5 overflow-hidden text-white rounded-md">
              <img
                src={blog.images}
                alt="card-image"
                className="w-full h-full"
              />
            </div>
            <div class="p-4  flex flex-col flex-wrap">
              <div class="mb-4 flex justify-between">
                <div className="flex items-center">
                  <img
                    alt={user.username}
                    src={user.pfp}
                    class="relative inline-block h-8 w-8 rounded-full"
                  />
                  <div class="flex flex-col ml-3 text-sm">
                    <span class="text-zinc-100 font-semibold">
                      {user.username}
                    </span>
                    <span class="text-zinc-300">
                      {new Date(blog.created_at).toLocaleDateString("en-GB", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
                <div className="icons flex gap-2 text-xl">
                  <i class="cursor-pointer ri-heart-fill text-white"></i>
                  <i class="cursor-pointer ri-message-2-fill text-white"></i>
                  <i class="cursor-pointer ri-share-fill text-white"></i>
                </div>
              </div>

              <p class="text-zinc-100 leading-normal w-max-[900px] w-min-[100px] text-wrap font-light">
                {blog.content}
              </p>
            </div>

            <div class="flex items-center justify-between p-4"></div>
          </div>

          <footer className="rounded-lg h-full shadow m-4 bg-black">
            <div className="w-full  mx-auto max-w-screen-xl gap-9 p-4 md:flex md:items-center md:justify-between">
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
