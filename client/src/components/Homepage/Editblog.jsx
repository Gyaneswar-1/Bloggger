import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Stack, Input, Textarea, CloseButton, Button } from "@chakra-ui/react";
import { editBlog, getBlogByID } from "../../services/apiManage.service";
import { Spinner, Text, VStack } from "@chakra-ui/react";

function Editblog() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("title");
  const [content, setContent] = useState("content");
  const [image, setImage] = useState({});
  const [loading, setLoading] = useState(true);
  const [bloading,setbLoading] = useState(false);


  const handleSubmit = async (e) => {
    setbLoading(true);
    e.preventDefault();
    console.log("image",image); 
    const result = await editBlog( id, title, content, image );
    console.log("RESULT",result); 
    navigate("/home/user");
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBlogByID(id);
      if (data != null) {
        setLoading(false);
      }
      setTitle(data[0].title);
      setContent(data[0].content);
      setImage(data[0].images);
    };
    fetchData();
  }, [id]);

  return (
    <div className="bg-black max-h-screen max-w-full h-screen w-screen flex justify-center items-center">
      {loading ? (
        <VStack colorPalette="green.100">
          <Spinner color="green.100" />
          <Text color="green.100">Loading...</Text>
        </VStack>
      ) : (
        <div className="md:h-5/6 md:w-2/6 h-full w-full bg-zinc-700 rounded-md  text-white ">
          <form action="" onSubmit={handleSubmit}>
            <CloseButton
              className="p-4 m-4"
              onClick={() => {
                navigate("/home/user");
              }}
            />
            <h1 className="text-3xl text-center font-thin">Edit blog</h1>
            <Stack gap="3" className="p-6">
              <h1>Title:</h1>
              <div class="mb-1">
                <input
                  type="text"
                  id="base-input"
                  class="bg-zinc-700 border border-zinc-600 text-white text-sm rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block w-full p-2.5  "
                  placeholder={title}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <h1>Content:</h1>
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm max-h-36 text-white bg-zinc-50 rounded-lg border border-zinc-300 focus:ring-green-500 focus:border-green-500 dark:bg-zinc-700 dark:border-zinc-600 "
                placeholder={content}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
              <h1>Image:</h1>
              <input
                class="block w-full text-sm text-zinc-100 border border-zinc-300 rounded-lg cursor-pointer bg-zinc-800  focus:outline-none"
                id="file_input"
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <Button
                  isLoading={bloading}    
                type="submit"
                colorScheme="green"
                className=" text-white p-2 rounded mt-6"
              >
                Submit
              </Button>
            </Stack>
          </form>
        </div>
      )}
    </div>
  );
}

export default Editblog;
