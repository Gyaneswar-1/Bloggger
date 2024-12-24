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
  const [lodingButton, setLoadingButton] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoadingButton(true);
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
            {lodingButton ? (
              <button
                disabled
                type="button"
                class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2  inline-flex items-center"
              >
                <svg
                  aria-hidden="true"
                  role="status"
                  class="inline w-4 h-4 me-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            ) : (
              <button
                type="submit"
                class="focus:outline-none text-white  focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-green-600 hover:bg-green-700 focus:ring-green-800"
              >
                publish
              </button>
            )}
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
