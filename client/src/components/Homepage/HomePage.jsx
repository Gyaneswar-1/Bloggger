import React, { useState, useEffect } from "react";
import Cardd from "../ReuseableComponents.jsx/Cardd.jsx";
import {
  getAllUsers,
  getHomePageData,
} from "../../services/apiManage.service.js";
import SidePage from "./SidePage.jsx";
import { getUserId } from "../../services/authService.js";
import { Spinner, Text, VStack } from "@chakra-ui/react";

function HomePage() {
  const [card, setCard] = useState([]);
  const [ucard, setUCard] = useState([]);
  const [blogLoading, setBlogLoading] = useState(true);
 
  const getDatas = async () => {
    try {
      const data = await getHomePageData();
      if (data !== null) {
        setBlogLoading(false);
      }
      const udata = await getAllUsers();
      setCard(data);
      setUCard(udata);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDatas();
  }, []);

  return (
    <div className="flex justify-center ">
      <div className=" cards flex flex-col flex-wraps items-center justify-center gap-2">
        {blogLoading ? (
          <VStack colorPalette="green.100">
            <Spinner color="green.100" />
            <Text color="green.100">Loading...</Text>
          </VStack>
        ) : (
          card.map((card, index) => (
            <Cardd
              key={index}
              id={card.id}
              title={card.title}
              content={card.content}
              images={card.images}
              created_at={card.created_at}
              username={card.username}
              userpfp={card.pfp}
            />
          ))
        )
}
      </div>
      <div>
       
        {ucard
          .filter((user) => user.id !== getUserId().id)
          .map((user, index) => (
            <SidePage
              key={index}
              pfp={user.pfp}
              name={user.username}
              bio={user.bio}
              id={user.id}
            />
          ))}
      </div>
    </div>
  );
}

export default HomePage;
// {ucard.map((user, index) => (
//   <SidePage
//     key={index}
//     pfp={user.pfp}
//     name={user.username}
//     bio={user.bio}
//     id={user.id}
//   />
// ))}
