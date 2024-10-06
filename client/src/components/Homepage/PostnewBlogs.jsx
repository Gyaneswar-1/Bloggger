import React, { useState } from "react";
// import { Form } from "react-router-dom";
import { Textarea, Input } from "@chakra-ui/react";
import { postNewBlogData } from "../../services/apiManage.service";

function PostnewBlogs() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Title: ", title);
    console.log("Content: ", content);
    postNewBlogData(title,content)
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };
  return (
    <div className="bg-emerald-50 h-lvh w-lvw flex justify-center items-center">
      <div className="h-5/6 w-5/6 bg-emerald-200 shadow-2xl p-8">
        <form action="" onSubmit={handleSubmit}>
          <div className="text-4xl pb-6 text-center font-serif">Post Blog</div>
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
          <button
            type="submit"
            className="mt-4 p-2 bg-emerald-800 text-white "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostnewBlogs;
