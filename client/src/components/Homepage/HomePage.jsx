import React, { useState, useEffect } from "react";
import Cardd from "../ReuseableComponents.jsx/Cardd.jsx";
import {
  getAllUsers,
  getHomePageData,
} from "../../services/apiManage.service.js";
import SidePage from "./SidePage.jsx";
import { getUserId } from "../../services/authService.js";
import { Spinner, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
function HomePage() {
  const [card, setCard] = useState([]);
  const [ucard, setUCard] = useState([]);
  const [blogLoading, setBlogLoading] = useState(true);
  const navigate = useNavigate();

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
    <>
      {blogLoading ? (
        <VStack colorPalette="green.100">
          <Spinner color="green.100" />
          <Text color="green.100">Loading...</Text>
        </VStack>
      ) : (
        <div className="flex justify-center">
          <div className=" cards flex flex-col md:w-fit w-screen pl-0 ml-0 md:p-0 md:m-0 flex-wrap items-center justify-center gap-2">
            {card.map((card, index) => (
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
            ))}
          </div>
          <div className="hidden md:flex flex-col gap-3 sidepage-container">
            <div className="w-full max-w-md p-4  rounded-lg shadow sm:p-8 dark:bg-zinc-800 dark:border-zinc-700">
              <div className="flex items-center justify-between mb-4">
                <h6 className="mr-4 font-bold leading-none text-gray-900 dark:text-white">
                  New Users
                </h6>
                <a
                  className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 cursor-pointer"
                  onClick={() => {
                    navigate("/home/trending/");
                  }}
                >
                  View all
                </a>
              </div>
              <div className="flow-root ">
                <ul role="list" className="divide-y divide-gray-700 ">
                  {ucard
                    .filter((user) => user.id !== getUserId().id)
                    .slice(0, 4)
                    .map((user, index) => (
                      <SidePage
                        key={index}
                        pfp={user.pfp}
                        name={user.username}
                        bio={user.bio}
                        id={user.id}
                        email={user.email}
                      />
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;
