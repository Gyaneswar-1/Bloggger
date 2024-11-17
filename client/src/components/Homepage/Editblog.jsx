import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Stack, Input, Textarea, CloseButton } from "@chakra-ui/react";
import { editBlog, getBlogByID } from "../../services/apiManage.service";
import { Spinner, Text, VStack } from "@chakra-ui/react";

function Editblog() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("title");
  const [content, setContent] = useState("content");
  const [image, setImage] = useState("images");
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    editBlog({ id, title, content, image });
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
        <div className="h-5/6 w-2/6 bg-zinc-700 rounded-md  text-white ">
          <form action="" onSubmit={handleSubmit}>
            <CloseButton
              className="p-4 m-4"
              onClick={() => {
                navigate("/home/user");
              }}
            />
            <h1 className="text-4xl text-center font-thin">Edit blog</h1>
            <Stack gap="4" className="p-6">
              <h1>Title:</h1>
              <Input
                placeholder={title}
                variant="outline"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <h1>Content:</h1>
              <Textarea
                className="max-h-36"
                size="xl"
                placeholder={content}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <h1>Image:</h1>
              <Input
                placeholder={image}
                variant="outline"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <button
                type="submit"
                className="bg-green-500 text-white p-2 rounded mt-6"
              >
                Submit
              </button>
            </Stack>
          </form>
        </div>
      )}
    </div>
  );
}

export default Editblog;
