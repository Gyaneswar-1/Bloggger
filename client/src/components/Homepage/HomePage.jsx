import React, { useState, useEffect } from "react";
import Cardd from "../ReuseableComponents.jsx/Cardd.jsx";
import { getHomePageData } from "../../services/apiManage.service.js";

function HomePage() {
  const [card, setCard] = useState([]);

  const getDatas = async () => {
    getHomePageData().then((data) => {
      setCard(data)
    });
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
          />
        ))}
        {/* <UserInfopage/> */}
      </div>
    </div>
  );
}

export default HomePage;
