import React, { useEffect, useState } from "react";
import Navbar from "./Navbarr";
import HomePage from "./HomePage";
import { Spinner, Text, VStack } from "@chakra-ui/react";
import {
  getAllUsers,
  getHomePageData,
  getUserProfileData,
} from "../../services/apiManage.service";

// import Footer_ from "../ReuseableComponents.jsx/Footer_";
function HomeEx() {
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const fetchData = async () => {
      const homePageData = await getHomePageData();
      const userProfileData = await getAllUsers();
      console.log("Response 1");
      
      if (homePageData !== null && userProfileData !== null) {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      {loading ? (
        <VStack colorPalette="teal">
          <Spinner color="green.400" />
          <Text color="green.600">Loading...</Text>
        </VStack>
      ) : (
        <HomePage />
      )}
    </>
  );
}

export default HomeEx;
