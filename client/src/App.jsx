import React, { useState } from "react";
import Navbarr from "./components/homepage/Navbarr";
import Cardd from "./components/homepage/Cardd";
import axios from "axios";

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

  return (
    <div className="bg-slate-200 h-screen w-full">
      <Navbarr />
      <button className="bg-red-400" onClick={getDatas}>click me</button>
     <div className="cards  flex flex-row flex-wrap  justify-center gap-5">
     {card.map((card, index) => (
        <Cardd key={index} title={card.title} content={card.content} images={card.images}/>
      ))}
     </div>
    </div>
  );
}

export default App;