import { getToken, isAuthenticated, getUserId } from "./authService.js";
import axios from "axios";
// import { v2 as cloudinary } from "cloudinary";

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
      console.log("error ", err);
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
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
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
    if (result) {
      return "User deleted";
    }
  } catch (error) {
    console.log(error);
  }
};

//blog
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

    return result.data.data;
  } catch (error) {
    console.log("Error in fetching data: ", error);
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

export const getFollowedById = async (id) => {
  // the user followed these guys
  const token = getToken();
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

export const editBlog = async (id, title, content, image) => {
  const token = getToken();
  const api = "http://localhost:3000/api/v1/blog/edit";
  const imageurl = await uploadImage(image);

  try {
    const result = axios.put(
      api,
      {
        id: id,
        title: title,
        content: content,
        image: imageurl,
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
// image upload && delete
export const uploadImage = async (image) => {
  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
  data.append("cloud_name", import.meta.env.VITE_CLOUD_NAME);

  try {
    const result = await axios.post(
      import.meta.env.VITE_CLOUDINARY_UPLOAD_URL,
      data
    );

    return result.data.url;
  } catch (error) {
    console.log("Axios_error", error);
  }
};

// like
export const likeblog = async (bid) => {
  const uid = getUserId().id;
  const token = getToken();
  const api = `http://localhost:3000/api/v1/blog/like/${bid}/${uid}`;
  try {
    const result = await axios.post(
      api,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getlike = async (bid) => {
  const api = `http://localhost:3000/api/v1/blog/getlike/${bid}`;
  const token = getToken();
  try {
    const result = await axios.get(api, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result.data.message;
  } catch (error) {
    console.log(error);
  }
};

export const isUserliked = async (bid) => {
  const uid = getUserId().id;
  const api = `http://localhost:3000/api/v1/blog/getlike/${bid}/${uid}`;
  const token = getToken();
  try {
    const result = await axios.get(api, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (isliked) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
};

export const dislike = async (bid) => {
  const uid = getUserId().id;
  const api = `http://localhost:3000/api/v1/blog/dislike/${bid}/${uid}`;
  const token = getToken();
  try {
    const result = await axios.delete(api, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return true;
  } catch (error) {
    console.log(error);
  }
};

// comment
export const getcomment = async (bid) => {
  const token = getToken();
  const api = `http://localhost:3000/api/v1/blog/comment/${bid}`;
  try {
    const result = await axios.get(api, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const deletecomment = async (cid) => {
  const token = getToken();
  const api = `http://localhost:3000/api/v1/blog/comment/${cid}`;
  try {
    const result = await axios.delete(api, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return result.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const addcomment = async (bid, content) => {
  if (content === "") {
    return null;
  }
  const uid = getUserId().id;
  const token = getToken();
  const api = `http://localhost:3000/api/v1/blog/comment/${bid}/${uid}`;
  try {
    const result = await axios.post(
      api,
      { content: content },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return result.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
