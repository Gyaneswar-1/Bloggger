import React, { useState } from "react";
import { Textarea, Input } from "@chakra-ui/react";
import { postNewBlogData } from "../../services/apiManage.service";
import { useNavigate } from "react-router-dom";
import { useToast, CloseButton } from "@chakra-ui/react";
import { uploadImage } from "../../services/apiManage.service";

function PostnewBlogs() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const imageUrl = await uploadImage(image);

    if (postNewBlogData(title, content, imageUrl)) {
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
    console.log("hello⬇️");
    //  console.log(event.target.files[0]);
    // printConfig(event.target.files[0]);
    setImage(event.target.files[0]);
  };
  const navigate = useNavigate();
  const toast = useToast();
  return (
    <div className="bg-black h-lvh w-lvw flex justify-center items-center">
      <div className="h-5/6 w-5/6 bg-zinc-500 shadow-2xl p-8 rounded-xl max-h-full max-w-full min-h-fit min-w-fit">
        <form action="" onSubmit={handleSubmit}>
          <div className=" flex justify-between items-center pb-6 text-center font-serif">
            <div
              className="h-6 w-6 cursor-pointer"
              onClick={() => {
                navigate("/home/main");
              }}
            >
              <CloseButton background={"green"} color={"white"} />
            </div>
            <h1 className="text-4xl">Post Blog</h1>
            <button
              type="submit"
              className="p-2 bg-green-700 rounded-md text-white hover:bg-green-800"
            >
              publish
            </button>
          </div>
          <input
            type="text"
            onChange={handleTitleChange}
            className="w-full p-4 text-4xl bg-transparent text-black outline-none placeholder-gray-100"
            placeholder="Title"
          />
          <textarea
            name=""
            id=""
            className="w-full p-4 h-40 max-h-60 bg-transparent text-xl outline-none placeholder-gray-100"
            placeholder="Edit your text"
            onChange={handleContentChange}
          ></textarea>

          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark"
            htmlFor="file_input"
          >
            Upload file
          </label>
          <input
            className="block w-full text-sm  border border-gray-300 rounded-lg cursor-pointer  text-gray-800 focus:outline-none bg-zinc-500 dark:border-zinc-900 placeholder-gray-400"
            id="file_input"
            type="file"
            onChange={handleImageChange}
          />
        </form>
      </div>
    </div>
  );
}

export default PostnewBlogs;
