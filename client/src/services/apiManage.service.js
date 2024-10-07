import { getToken, isAuthenticated,getUserId} from "./authService";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { login } from "./authService";

// export const getUserInfoFromToken = () => {
//   const token = getToken();
//   if (token) {
//     try {
//       // const decodedData = getUserId();
//       console.log(getUserId());
      
//       // return decodedData;
//     } catch (error) {
//       console.log("Error decoding token:", error);
//     }
//   } else {
//     console.log("No token found, sorry");
//   }
// };

// this is homepage data fetch
export const getHomePageData = async () => {
  const token = await getToken();
  if (isAuthenticated()) {
    const api = "http://localhost:3000/api/v1/home";
    try {
      const response = await axios.get(api, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
           
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

export const getUserProfileData = async (id) => {
  const token = getToken();
  const api = `http://localhost:3000/api/v1/user/${id}`;
  try {
    const response = await axios.get(api, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postNewBlogData = async (title, content,image) => {
  // const { title, content, user_id, image_url } = props;
  const uid =getUserId(); 
  const ID = uid.id

  const api = "http://localhost:3000/api/v1/blog/post";
  const token = getToken();

  try {
    const response = await axios.post(
      api,
      {
        title: title,
        content: content,
        user_id: ID,
        image_url: image,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log("Some error: ",error);
  }
};
