import React, { useState, useEffect } from "react";
import Cardd from "../ReuseableComponents.jsx/Cardd.jsx";
import { getHomePageData } from "../../services/apiManage.service.js";
import { getUserId } from "../../services/authService.js";

function HomePage() {
  const [card, setCard] = useState([]);

  const getDatas = async () => {
    try {
      const data = await getHomePageData();
      console.log("Fetched data",data);
      setCard(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDatas();
  }, []);

  return (
    <div>
      <div className=" cards flex flex-col flex-wraps items-center gap-2">
        {card.map((card, index) => (
          <Cardd
            key={index}
            title={card.title}
            content={card.content}
            images={card.images}
            created_at={card.created_at}
            username={card.username}
            userpfp={card.pfp}
          />
        ))}
        {/* <UserInfopage/> */}
      </div>
    </div>
  );
}

export default HomePage;
