import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getBlogByID,
  getUserProfileData,
} from "../../services/apiManage.service";

const BlogPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [user, setUser] = useState({});

  async function getData() {
    const blogData = await getBlogByID(id);
    const userData = await getUserProfileData(blogData[0].user_id);
    setBlog(blogData[0]);
    setUser(userData);
  }

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div className="flex justify-center h-screen w-screen">
      <div className="h-full w-4/6 bg-slate-400 shadow-2xl flex flex-col pl-12 pr-12">
        <div className="top-bar">
          <button
            className="bg-green-400 p-4 rounded-xl "
            onClick={() => {
              navigate("/home/main");
            }}
          >
            Back button
          </button>
        </div>
        <h1 className="text-4xl">{blog.title}</h1>
        <div className="userdiv flex gap-3">
          <div className="userimgae rounded-full h-12 w-12 flex gap-4 justify-center items-center ">
            <img src={user.pfp} alt="" className=""/>
            <p>{user.username}</p>
            <p>{blog.created_at}</p>
          </div>
          <div className="blogimage pt-52">
            <img src={blog.images} alt="" />
          </div>
          <div className="content">
            <p>
              {blog.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
{
  /* <img src={user.pfp} alt="" className="h-[300px] w-5/6 object-cover"/> */
}
