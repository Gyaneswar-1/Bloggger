
import React, { useState, useEffect } from "react";
import Cardd from "../ReuseableComponents.jsx/Cardd.jsx";
import axios from "axios";
import { getToken } from "../../services/authService.js";

function HomePage() {
  const [card, setCard] = useState([]);

  const getDatas = async () => {
    const token = getToken();
    if (!token) {
      console.log("No token found, sorry");
      return;
    } else {
      const api = "http://localhost:3000/api/v1/home";
      try {
        const response = await axios.get(api, {
          headers: {
            Authorization: `Bearer ${token}`, 
            userID:"70"
          },
        });
        console.log(response);
        setCard(response.data.result);
      } catch (err) {
        console.log("error ===>", err);
      }
    }
  };

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <div>
      <div className="cards flex flex-row flex-wrap justify-center gap-5">
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