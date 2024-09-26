import React from "react";

function Cardd(props) {
  const {title,content,images} = props;
  return (
    <>
      <div className="cardd bg-slate-300 h-[450px] w-[300px] ml-4 mr-4">
        <div className="image h-1/3 bg-slate-600 m-3">
          <img src={images} alt="" />
        </div>
        <h3 className="pl-3 pr-3 pt-2 text-[1.3rem] ">
          {title}
        </h3>
        <p className="pl-3 pr-3 pt-2">
          {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          mollitia quaerat qui soluta aliquam facilis illo sapiente enim culpa
          exercitationem. Tempora odio vero veniam quo vel consequuntur nobis.
          Quo, voluptas? */}
          {content}
        </p>
        <hr className="text-black" />
        <div className="username"></div>
      </div>
    </>
  );
}

export default Cardd;
