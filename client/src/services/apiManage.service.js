import { getToken, isAuthenticated, getUserId } from "./authService";
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
    return null;
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
    return null;
  }
};

export const postNewBlogData = async (title, content, image) => {
  // const { title, content, user_id, image_url } = props;
  const uid = getUserId();
  const ID = uid.id;

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
    console.log("Some error: ", error);
  }
};

export const getUserBlogs = async (id) => {
  const token = getToken();
  const api = `http://localhost:3000/api/v1/user/blogs/${id}`;
  try {
    const result = await axios.get(api, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log("Fetched data:",result.data.data);
    return result.data.data;
  } catch (error) {
    console.log("Error in fetching data: ", error);
  }
};

export const postUserData = async (data) => {
  const { username, pfp, bio } = data;
  const token = getToken();
  const id = getUserId();

  const api = "http://localhost:3000/api/v1/user/edit";
  try {
    const result = await axios.put(
      api,
      {
        id: id.id,
        username: username,
        pfp: pfp,
        bio: bio,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (result) {
      return result;
    }
  } catch (error) {
    console.log("Error while posting user data: ", error);
  }
};

export const deleteUser = async () => {
  const id = getUserId();
  const token = getToken();

  const api = "http://localhost:3000/api/v1/user/delete";
  try {
    const result = await axios.delete(api, {
      data: {
        email: id.email,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(result);
    if (result) {
      return "User deleted";
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteBlog = async (bid) => {
  const id = getUserId();
  const token = getToken();
  const api = `http://localhost:3000/api/v1/blog/delete/${id.id}/${bid}`;
  try {
    const result = await axios.delete(api, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getAllUsers = async () => {
  const token = getToken();
  try {
    const api = "http://localhost:3000/api/v1/user";
    const result = await axios.get(api, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return result.data.message;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getBlogByID = async (id) => {
  const token = getToken();
  try {
    const api = `http://localhost:3000/api/v1/blog/${id}`;
    const result = await axios.get(api, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const follow = async (uid) => {
  const token = getToken();
  const id = getUserId();
  const fid = id.id;
  console.log("user id: ", uid);
  console.log("follow id: ", fid);
  try {
    const api = `http://localhost:3000/api/v1/user/follow/${uid}`;
    const result = await axios.post(
      api,
      { id: fid },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Result", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

//user followed
export const getFollowed = async () => {
  // the user followed these guys
  const token = getToken();
  const uid = getUserId();
  const id = uid.id;
  try {
    const api = `http://localhost:3000/api/v1/user/getfollows/${id}`;
    const result = await axios.get(api, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result.data.data;
  } catch (error) {
    console.log(error);
  }
};

//user followers
export const getFollowers = async () => {
  // the user followers; number of users that follows these user
  const token = getToken();
  const uid = getUserId();
  const id = uid.id;
  const api = `http://localhost:3000/api/v1/user/getfollowers/${id}`;
  try {
    const result = await axios.get(api, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getFollowersById = async (id) => {
  const token = getToken();
  const api = `http://localhost:3000/api/v1/user/getfollowers/${id}`;
  try {
    const result = await axios.get(api, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const unfollowUser = async (uid) => {
  const token = getToken();
  const id = getUserId();
  const fid = id.id;
  const api = `http://localhost:3000/api/v1/user/unfollow/${uid}`;
  console.log("uid=", uid);
  console.log("fid=", fid);

  try {
    const result = await axios.delete(api, {
      data: {
        id: fid,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const searchBlog = async (title) => {};

export const editBlog = async (id, title, content, image) => {
  const token = getToken();
  const api = "http://localhost:3000/api/v1/blog/edit";
  try {
    const result = axios.put(
      api,
      {
        id: id,
        title: title,
        content: content,
        image: image,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return result;
  } catch (error) {
    console.log("Error while editing the blog! ");
  }
};
