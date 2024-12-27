import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getBlogByID,
  getlike,
  likeblog,
  dislike,
  getUserProfileData,
} from "../../services/apiManage.service";

import {
  Spinner,
  Text,
  VStack,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { getUserId } from "../../services/authService";
import CommentCard from "../ReuseableComponents.jsx/CommentCard";
import { getcomment } from "../../services/apiManage.service";
import { formatDistanceToNow } from "date-fns";
import CopyUrlButton from "../ReuseableComponents.jsx/CopyurlButton";
import { addcomment } from "../../services/apiManage.service";

const BlogPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [user, setUser] = useState({});
  const [userLike, setUserLike] = useState(false); // liked or not
  const [likes, setLikes] = useState(0); // number of likes
  const [showBlog, setShowBlog] = useState(true);
  // comment
  const [comment, setComment] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);
  async function getData() {
    const user_id = await getUserId();
    const blogData = await getBlogByID(id);
    const userData = await getUserProfileData(blogData[0].user_id);
    if (blogData != null && userData != null) {
      setShowBlog(false);
    }
    setBlog(blogData[0]);
    setUser(userData);
    const likeNumber = await getlike(id);
    setLikes(likeNumber.length);
    console.log("SDAD", user_id.id);
    const isUserliked = likeNumber.includes(user_id.id);
    if (isUserliked) {
      setUserLike(!userLike);
    }
  }
  const handleLikeClick = async () => {
    try {
      if (userLike) {
        await dislike(id);
        setUserLike(!userLike);
        setLikes(likes - 1);
      } else {
        await likeblog(id);
        setUserLike(!userLike);
        setLikes(likes + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //comment handle
  async function handleComment() {
    try {
      const result = await getcomment(id);
      console.log("array", result.data);
      setComment(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  const SubmitComment = async (newComment) => {
    setLoading(true)
    console.log("Submitted Comment:", newComment);
    const newcomment = await addcomment(id, newComment);
    if (newcomment !== null) {
      setLoading(false)
    }
    console.log("Submitted Comment:", newcomment);
  };

  useEffect(() => {
    getData();
    handleComment();
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
              {blog.title}
            </h6>
            <div class="relative h-[500px] m-2.5 overflow-hidden text-white rounded-md">
              <img
                src={blog.images}
                alt="card-image"
                className="w-full h-full"
              />
            </div>
            <div class="p-4  md:w-[930px]  flex flex-col flex-wrap">
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
                      {formatDistanceToNow(new Date(blog.created_at), {
                        addSuffix: true,
                      })}
                    </span>
                  </div>
                </div>
                <div className="icons flex gap-2 text-xl text-white">
                  <button
                    onClick={() => {
                      handleLikeClick();
                    }}
                    className="flex flex-col items-center"
                  >
                    {userLike ? (
                      <i class="ri-heart-fill text-red-600"></i>
                    ) : (
                      <i class="ri-heart-line text-white"></i>
                    )}
                    <p className="text-sm">{likes}</p>
                  </button>
                  <button
                    className="flex flex-col items-center"
                    ref={btnRef}
                    onClick={onOpen}
                  >
                    <i className="cursor-pointer ri-message-2-fill text-xl text-white"></i>

                    <Drawer
                      isOpen={isOpen}
                      placement="right"
                      onClose={onClose}
                      finalFocusRef={btnRef}
                    >
                      <DrawerOverlay />
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          SubmitComment(newComment);
                        }}
                      >
                        <DrawerContent bg="#333">
                          <DrawerCloseButton textColor="white" />
                          <DrawerHeader textColor="white">
                            Add comment
                          </DrawerHeader>

                          <DrawerBody className="flex items-center flex-col">
                            <Textarea
                              textColor="white"
                              size="lg"
                              placeholder="Type here..."
                              className="mb-8 p-2"
                              resize="vertical"
                              onChange={(e) => {
                                const value = e.target.value;
                                setNewComment(value);
                              }}
                            />

                            <div className="flex flex-col gap-3  justify-center items-center text-cyan-50">
                              {comment.map((data) => {
                                return (
                                  <CommentCard
                                    content={data.content}
                                    username={data.user_name}
                                    pfp={data.user_pfp}
                                    date={data.created_at}
                                    uid={data.user_id}
                                    bid={data.blog_id}
                                    cid={data.id}
                                  />
                                );
                              })}
                            </div>
                          </DrawerBody>
                          <DrawerFooter>
                          <Button 
  isLoading={loading}
  colorScheme="green" 
  type="submit">
  Post
</Button>
                          </DrawerFooter>
                        </DrawerContent>
                      </form>
                    </Drawer>

                    <p className="text-sm">{comment.length}</p>
                  </button>
                  <button className="flex">
                    <CopyUrlButton />
                  </button>
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
