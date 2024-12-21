import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getUserProfileData,
  postUserData,
  uploadImage,
} from "../../services/apiManage.service";
import { getUserId } from "../../services/authService";
import { CloseButton, Input, Text } from "@chakra-ui/react";
import DeleteUserPage from "./DeleteUserPage";

function EditUser() {
  const id = getUserId();
  const [username, setUsername] = useState(id.username);
  const [bio, setBio] = useState(id.bio);
  const [pfp, setPfp] = useState(id.pfp);
  const [pfpPreview, setPfpPreview] = useState(id.pfp);
  const [deleteUser, setDeleteUser] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { username, bio, pfp };
    try {
      if (typeof pfp === "object") {
        const uploadedPfp = await uploadImage(pfp);
        userData.pfp = uploadedPfp;
        await postUserData(userData);
      }
      navigate("/home/main");
    } catch (error) {
      console.log(error);
    }
  };

  const handlePfp = (event) => {
    const file = event.target.files[0];
    setPfp(file);
    setPfpPreview(URL.createObjectURL(file));
  };

  return (
    <div className="bg-transparent h-screen w-full flex justify-center items-center ">
      <div className="bg-zinc-400 h-5/6 w-3/6 min-h-fit min-w-fit max-h-full max-w-full shadow-2xl rounded-md">
        <div className="pl-2">
          <CloseButton
            padding={3}
            margin={2}
            onClick={() => navigate("/home/user")}
          />
          <div className="flex justify-center">
            <h1 className="font-Times text-4xl">Edit user</h1>
          </div>
        </div>
        <div className="userInputs pl-10 pr-10 pt-2">
          <form onSubmit={handleSubmit}>
            <h1>Profile</h1>
            <img
              src={pfpPreview}
              alt={username}
              className="h-32 w-32 object-cover rounded-full overflow-hidden"
            />
            <Text mb="8px">Username:</Text>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-zinc-200 text-lg p-2 rounded-md"
            />
            <div className="pfp-section">
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor="file_input"
              >
                Upload file
              </label>
              <input
                className="block w-full text-sm border border-gray-300 rounded-lg cursor-pointer text-gray-800 focus:outline-none bg-zinc-500 placeholder-gray-400"
                id="file_input"
                type="file"
                onChange={handlePfp}
              />
            </div>
            <Text mb="8px">Bio:</Text>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              maxLength={200}
              className="w-full bg-zinc-200 text-lg p-2 rounded-md"
            />
            <div className="action">
              <button
                type="submit"
                className="bg-green-600 p-2 rounded-md m-2 text-white"
              >
                Submit
              </button>
              <button
                type="button"
                className="bg-red-600 p-2 rounded-md m-2 text-white"
                onClick={() => setDeleteUser(!deleteUser)}
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
      {deleteUser && <DeleteUserPage />}
    </div>
  );
}

export default EditUser;
