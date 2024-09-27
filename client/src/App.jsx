import React, { useState } from "react";
import Navbarr from "./components/homepage/Navbarr";
import Cardd from "./components/homepage/Cardd";
import axios from "axios";
import { useEffect } from "react";
// import UserInfopage from "./components/UserInfoPage/UserInfopage";
// import './app.css';

function App() {
  const [card, setCard] = useState([]);

  const getDatas = () => {
    const api = "http://localhost:3000/api/v1/home";
    axios
      .get(api)
      .then((datas) => {
        console.log(datas.data.result);
        // Assuming the API returns an array of objects with title and content
        setCard(datas.data.result);
      })
      .catch((err) => {
        console.log("error ===>", err);
      });
  };

  useEffect(()=>{
    getDatas()
  },[])

  return (
    <div className="bg-slate-200 h-screen w-full">
      <Navbarr />
      <div className="cards  flex flex-row flex-wrap  justify-center gap-5">
     {card.map((card, index) => (
        <Cardd key={index} title={card.title} content={card.content} images={card.images} created_at={card.created_at}/>
      ))} 
      {/* <UserInfopage/> */}
     </div>
    </div>
  );
}

export default App;