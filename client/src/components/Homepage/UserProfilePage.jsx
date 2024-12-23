import React, { useState, useEffect } from "react";
import Navbar from "./Navbarr";
import { getUserId } from "../../services/authService.js";
import { Button } from "@chakra-ui/react";
import { logout } from "../../services/authService.js";
import { useNavigate } from "react-router-dom";
import {
  getFollowers,
  getUserBlogs,
  getFollowed,
} from "../../services/apiManage.service.js";
import Cardd from "../ReuseableComponents.jsx/Cardd.jsx";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

const UserProfilePage = () => {
  const navigate = useNavigate();
  const [ublog, setUblog] = useState([]);
  const [followers, setFollowers] = useState("");
  const [followed, setFollowed] = useState("");
  const [followersList, setFollowersList] = useState([]);
  const [followedList, setFollowedList] = useState([]);
  const [showVlogs, setShowBlogs] = useState(false);
  const [udata, setUdata] = useState({
    pfp: "",
    username: "",
    email: "",
    created_at: "",
  });

  const getData = async () => {
    const data = await getUserId();
    const result = await getUserBlogs(data.id);
    const follow = await getFollowers();
    const followed = await getFollowed();
    if (result != null) {
      setShowBlogs(true);
    }
    setFollowersList(follow);
    setFollowedList(followed);
    setUblog(result);
    setUdata(data);
    setFollowers(follow.length);
    setFollowed(followed.length);
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      <Navbar />
      <div className="flex  justify-evenly gap-8 p-6 bg-black h-full">
        <div className="h-1/2 w-4/5 rounded-lg bg-zinc-500 shadow-2xl flex flex-row">
          <div>
            <h1 className="m-9 text-6xl font-thin font-CosmicNeue text-white">
              {showVlogs ? "Your Blogs" : "No Blogs"}
            </h1>
            <div className="m-3 flex flex-col gap-9 mt-9">
              {ublog.map((data, index) => (
                <Cardd
                  key={index}
                  id={data.id}
                  title={data.title}
                  content={data.content}
                  images={data.images}
                  created_at={data.created_at}
                />
              ))}
            </div>
          </div>
        </div>
        <div className=" max-w-sm  border border-gray-200  
bg-zinc-200 p-6 rounded-lg shadow-lg h-fit w-1/4 ">

          <div className=" flex flex-col items-center">
            <img
              src={udata.pfp}
              alt={udata.username}
              className="h-24 w-24 rounded-full mb-4 object-cover"
            />
            <h1 className="text-2xl font-bold mb-2">{udata.username}</h1>
            <p className="text-gray-700">{udata.email}</p>
            <p className="text-gray-700">{udata.bio}</p>
            <p className="text-gray-500 mt-2">
              Created at: {new Date(udata.created_at).toLocaleDateString()}
            </p>
            <div className="follows flex gap-5 pt-2">
              <Popover>
                <PopoverTrigger>
                  <button className="bg-gray-400 p-1 rounded-md cursor-pointer">
                    {followers} followers
                  </button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Followers</PopoverHeader>
                  {followersList.map((data) => {
                    return (
                      <PopoverBody key={data.id}>
                        <div className="flex justify-between">
                          <img
                            src={data.pfp}
                            alt={data.username}
                            className="h-8 w-8 rounded-full"
                          />
                          <p>{data.username}</p>
                        </div>
                      </PopoverBody>
                    );
                  })}
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger>
                  <button className="bg bg-gray-400 p-1 rounded-md cursor-pointer">
                    {followed} Followed
                  </button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Followed</PopoverHeader>
                  {followedList.map((data) => {
                    return (
                      <PopoverBody key={data.id}>
                        <div className="flex justify-between">
                          <img
                            src={data.pfp}
                            alt=""
                            className="h-8 w-8 rounded-full"
                          />
                          <p>{data.username}</p>
                        </div>
                        <hr />
                      </PopoverBody>
                    );
                  })}
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="buttons flex justify-evenly pt-5">
            <Button
              rounded="inherit"
              variant="outline"
              borderRadius={6}
              colorScheme="red"
              onClick={() => {
                try {
                  if (logout()) {
                    console.log("Logged out");
                    navigate("/welcome");
                  } else {
                    console.log("Cannot logged out");
                  }
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              Logout
            </Button>
            <Button
              variant="outline"
              colorScheme="blue"
              borderRadius={6}
              onClick={() => {
                navigate("/home/user/edituser");
              }}
            >
              Edit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfilePage;
