import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function UserInfopage({ username, email, userPfp,createdAt }) {
    const [udata,setUdata] = useState({});

    const getData=()=>{
        const api = "http://localhost:3000/api/v1/user/24";
        axios.get(api).then((result)=>{
            setUdata(result.data)
        }).catch((error)=>{console.log(error);
        })
    }

    useEffect(()=>{
        getData();
    })

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <div className="flex flex-col items-center">
        <img src={udata.pfp} alt={udata.username} className="h-24 w-24 rounded-full mb-4 object-cover" />
        <h1 className="text-2xl font-bold mb-2">{udata.username}</h1>
        <p className="text-gray-700">{udata.email}</p>
        <p className="text-gray-500 mt-2">Created at: {new Date(udata.created_at).toLocaleDateString()}</p>
      </div>
    </div>
  </div>
  );
}

export default UserInfopage;