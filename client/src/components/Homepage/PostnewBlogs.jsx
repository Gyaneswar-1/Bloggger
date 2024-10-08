import React, { useState } from "react";
import { Textarea, Input } from "@chakra-ui/react";
import { postNewBlogData } from "../../services/apiManage.service";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

function PostnewBlogs() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (postNewBlogData(title, content, image)) {
      toast({
        title: "blog posted.",
        description: "We've posted your blog",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/home/main");
    } else {
      toast({
        title: "Error",
        description: "cannot post blog.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };
  const handleImageChange = (event) => {
    setImage(event.target.value);
  };
  const navigate = useNavigate();
  const toast = useToast();
  return (
    <div className="bg-emerald-50 h-lvh w-lvw flex justify-center items-center">
      <div className="h-5/6 w-5/6 bg-emerald-200 shadow-2xl p-8">
        <form action="" onSubmit={handleSubmit}>
          <div
            className="h-6 w-6 cursor-pointer"
            onClick={() => {
              navigate("/home/main");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
            </svg>
          </div>
          <div className="text-4xl flex justify-center items-center pb-6 text-center font-serif">
            <h1>Post Blog</h1>
          </div>
          <Input
            placeholder="ENTER TITLE"
            size="lg"
            variant="flushed"
            onChange={handleTitleChange}
            className="mb-12"
          />
          <Textarea
            onChange={handleContentChange}
            placeholder="CONTENT"
            size="lg"
            variant="flushed"
          />
          <Input
            placeholder="enter image url"
            size="lg"
            variant="flushed"
            onChange={handleImageChange}
            className="mb-12"
          />
          <button type="submit" className="mt-4 p-2 bg-emerald-800 text-white ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostnewBlogs;
