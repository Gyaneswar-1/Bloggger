import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getUserProfileData,
  postUserData,
} from "../../services/apiManage.service";
import { getUserId } from "../../services/authService";
import { CloseButton, Input, Text } from "@chakra-ui/react";
import DeleteUserPage from "./DeleteUserPage";

function EditUser() {
  const id = getUserId();
  const [username, setUsername] = useState(id.username);
  const [bio, setBio] = useState(id.bio);
  const [pfp, setPfp] = useState(id.pfp);
  const [deleteUser, setDeleteUser] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { username, bio, pfp };
    try {
      console.log("Submitting data: ", userData);
      await postUserData(userData);
    } catch (error) {
      console.log(error);
    }
  };
  const handleUsername = (event) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };
  const handleBio = (event) => {
    setBio(event.target.value);
  };

  const handlePfp = (event) => {
    setPfp(event.target.value);
  };

  return (
    <div className="bg-zinc-300 h-screen w-full flex justify-center items-center">
      <div className=" bg-emerald-50 h-5/6 w-5/6 shadow-2xl">
        <div className="flex justify-starts pl-4">
          <div className="font-playfair text-6xl flex justify-evenly items-center gap-[600px]">
            <CloseButton
              color="white"
              backgroundColor="green"
              rounded="inherit"
              onClick={() => {
                navigate("/home/user");
              }}
            />
            <h1>Edit User</h1>
          </div>
        </div>
        <div className="userInputes pl-20 pr-20 pt-2">
          <div className="flex justify-center">
            <div className="h-fit p-2 w-1/2 m-4 bg-zinc-200 shadow-2xl flex justify-evenly items-center gap-24">
              <div className="userimage rounded-full items-center flex flex-col text-3xl">
                <img
                  src={pfp}
                  alt={id.username}
                  className="h-32 w-32 object-cover rounded-full overflow-hidden"
                />
                <h1>{username}</h1>
              </div>
              <h1 className="text-wrap w-80">{bio ? bio : "No Bio"}</h1>
            </div>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <Text mb="8px">Username: </Text>
            <Input
              onInput={(e) => handleUsername(e)}
              placeholder="Enter name"
              rounded="inherit"
              color="black"
              border="1px"
            />
            <div className="pfp-section flex items-center justify-between">
              <div className="flex-grow mr-4">
                <Text mb="8px">pfp: </Text>
                <Input
                  onInput={(e) => handlePfp(e)}
                  placeholder="Enter pfp url:"
                  color="black"
                  border="1px"
                  rounded="inherit"
                />
              </div>
            </div>
            <Text mb="8px">Bio: </Text>
            <Input
              onInput={(e) => handleBio(e)}
              placeholder="Enter bio"
              color="black"
              border="1px"
              rounded="inherit"
            />
            <button className="bg-green-700 p-2 mt-12  text-white">
              submit
            </button>
            <button
              className="bg-red-700 p-2 mt-12 ml-10 text-white"
              onClick={() => {
                setDeleteUser(true);
              }}
            >
              Delete
            </button>
          </form>
        </div>
      </div>
      {deleteUser && <DeleteUserPage />}
    </div>
  );
}

export default EditUser;
