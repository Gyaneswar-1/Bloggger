import React, { useState,useEffect } from "react";
import Navbar from "./Navbarr";
import UsersPage from "./UsersPage.jsx";
import { Spinner, Text, VStack } from "@chakra-ui/react";
import { getAllUsers } from "../../services/apiManage.service.js";
import { getUserId } from "../../services/authService.js";

function Trendingpage() {
  const [ucard, setUser] = useState({});
  const [blogLoading,setBlogLoading] = useState(true)
  const getDatas = async () => {
    try {
      const userData = await getAllUsers();
      console.log(userData);
      
      if(userData != null){
        setBlogLoading(!blogLoading)
        setUser(userData)
      }

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDatas();
  }, []);
  
  return (
    <div>
      <Navbar />
      <div>
        {blogLoading ? (
          <VStack colorPalette="green.100">
            <Spinner color="green.100" />
            <Text color="green.100">Loading...</Text>
          </VStack>
        ) : (
          <div className="flex justify-center flex-wrap gap-5 w-auto">
            {ucard
              .filter((user) => user.id !== getUserId().id)
              .map((user, index) => (
                <UsersPage
                  key={index}
                  pfp={user.pfp}
                  name={user.username}
                  bio={user.bio}
                  id={user.id}
                  email={user.email}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Trendingpage;
