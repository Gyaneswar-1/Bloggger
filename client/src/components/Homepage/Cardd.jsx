import React from "react";

function Cardd(props) {
  const { title, content, images, username, created_at } = props;
  return (
    <div className="cardd bg-white shadow-lg rounded-lg overflow-hidden w-[300px] ml-4 mr-4">
      <div className="image h-48 w-full overflow-hidden">
        <img src={images} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{content}</p>
        <hr className="border-gray-300 mb-4" />
        <div className="flex items-center">
          <div className="avatar h-10 w-10 rounded-full overflow-hidden mr-3">
            <img src="https://via.placeholder.com/150" alt={username} className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-gray-900 font-medium">{username}</p>
            <p className="text-gray-500 text-sm">{new Date(created_at).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardd;