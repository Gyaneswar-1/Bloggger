import { getToken, isAuthenticated } from "./authService";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// this is homepage data fetch
export const getHomePageData = async () => {
  const token = getToken();
  if (token) {
    //   console.log(token);
    const api = "http://localhost:3000/api/v1/home";
    try {
      const response = await axios.get(api, {
        headers: {
          Authorization: `Bearer ${token}`,
          userID: "70",
        },
      });
      // console.log("This is response",response.data.result);
      return response.data.result;
    } catch (err) {
      console.log("error ===>", err);
    }
  } else {
    console.log("No token found, sorry");
    return;
  }
};

// this is UserProfile  page

export const getUserProfileData = async () => {
  const token = getToken();
  const api = "http://localhost:3000/api/v1/user/70";
  try {
    const response = await axios.get(api, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postNewBlogData = async (title,content) => {
  // const { title, content, user_id, image_url } = props;
  console.log("props data ",title,content);
  
  const api = "http://localhost:3000/api/v1/blog/post";
  const token = getToken();

  try {
    const response = await axios.post(
      api,
      {
        title: title,
        content: content,
        user_id: 70,
        image_url: "random.png",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
