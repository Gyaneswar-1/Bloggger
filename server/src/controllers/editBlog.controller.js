import db from "../db/db.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

export async function editBlog(req, res) {
  const { id, title, content, images } = req.body;
  console.log(id);
  console.log(title);
  console.log(content);
  console.log(images);
  // id title content user_id created_at updated_at images
  try {
    const result = await db.query(
      "UPDATE blogs SET title = $1, content = $2, images = $3,updated_at = NOW() WHERE id = $4;",
      [title, content, images, id]
    );

    return res
      .status(200)
      .json(new ApiResponse(200, "OK", "blog edited sucsessfully"));
  } catch (err) {
    return res
      .status(501)
      .json(new ApiError(501, "Error", "Error while editing data"));
  }
}
