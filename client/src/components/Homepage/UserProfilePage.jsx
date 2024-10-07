import React, { useState, useEffect } from "react";
import Navbar from "./Navbarr";
import { getUserId } from "../../services/authService.js";
import { Button } from "@chakra-ui/react";
import { logout } from "../../services/authService.js";
import { useNavigate } from "react-router-dom";

const UserProfilePage = () => {
  const navigate = useNavigate();
  const [udata, setUdata] = useState({
    pfp: "",
    username: "",
    email: "",
    created_at: "",
  });

  const getData = async () => {
    const data = await getUserId();

    setUdata(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <div className="flex flex-col items-center">
            <img
              src={udata.pfp}
              alt={udata.username}
              className="h-24 w-24 rounded-full mb-4 object-cover"
            />
            <h1 className="text-2xl font-bold mb-2">{udata.username}</h1>
            <p className="text-gray-700">{udata.email}</p>
            <p className="text-gray-500 mt-2">
              Created at: {new Date(udata.created_at).toLocaleDateString()}
            </p>
          </div>
          <Button
            variant="outline"
            colorScheme="red"
            onClick={(() => {
              try {
                if (logout()) {
                  console.log("Logged out");
                  navigate("/")
                } else {
                  console.log("Cannot logged out");
                }
              } catch (error) {
                console.log(error);
              }
            })}
          >
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};

export default UserProfilePage;
