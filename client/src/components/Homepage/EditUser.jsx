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
    <div className="bg-black h-screen w-full flex justify-center items-center ">
      <div className=" bg-zinc-400 h-5/6 w-5/6 shadow-2xl rounded-md">
        <div className="pl-2">
          <div className="flex justify-between p-4">
            <CloseButton
              color="white"
              backgroundColor="green"
              className="rounded-md"
              onClick={() => {
                navigate("/home/user");
              }}
            />
            <h1 className="font-Times text-4xl">Edit user</h1>
            <div className="action">
              <button
                className="bg-green-600 p-2 rounded-md m-2 text-white"
                onClick={() => {
                  handleSubmit();
                  navigate("/home/main");
                }}
              >
                submit
              </button>
              <button
                className="bg-red-600 p-2 rounded-md m-2 text-white"
                onClick={() => {
                  setDeleteUser(!deleteUser);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <div className="userInputes pl-36 pr-36 pt-2">
          <div className="flex justify-center"></div>
          <form>
  <h1>Profile</h1>
  <img
    src={pfp}
    alt={id.username}
    className="h-32 w-32 object-cover rounded-full overflow-hidden"
  />
  <Text mb="8px">Username: </Text>
  <input
    onChange={(e) => handleUsername(e)}
    defaultValue={username}
    className="w-full bg-zinc-200 text-lg p-2 rounded-md"
  />
  <div className="pfp-section flex items-center justify-between">
    <div className="flex-grow">
      <Text mb="8px">pfp: </Text>
      <input
        onChange={(e) => handlePfp(e)}
        className="w-full bg-zinc-200 text-lg p-2 rounded-md"
        defaultValue={pfp}
      />
    </div>
  </div>
  <Text mb="8px">Bio: </Text>
  <textarea
    onChange={(e) => handleBio(e)}
    maxLength={200}
    className="w-full bg-zinc-200 text-lg p-2 rounded-md"
  />
</form>
        </div>
      </div>
      {deleteUser && <DeleteUserPage />}
    </div>
  );
}

export default EditUser;
