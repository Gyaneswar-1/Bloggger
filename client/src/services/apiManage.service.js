import { getToken } from "./authService";
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
