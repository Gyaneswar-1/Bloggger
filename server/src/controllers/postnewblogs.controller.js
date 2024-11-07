import db from "../db/db.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

export async function postnewblogs(req, res) {
  const { title, content, user_id, image_url } = req.body;
  console.log(title);
  console.log(content);
  console.log(user_id);
  console.log(image_url);
  

  try {
    await db.query(
      "INSERT INTO blogs (title,content,user_id,images) VALUES ($1,$2,$3,$4)",
      [title, content, user_id, image_url]
    );
    return res
      .status(201)
      .json(new ApiResponse(401, "Success", "New blog uploded", true));
  } catch (error) {
    return res
      .status(401)
      .json(new ApiError(401, "Error", "did not added something went wrong"));
  }
}
