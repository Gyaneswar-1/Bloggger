import db from "../db/db.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

export async function editBlog(req, res) {
  const { id } = req.body;
  console.log(id.id);
  console.log(id.title);
  console.log(id.content);
  console.log(id.image);
  try {
    const result = await db.query(
      "UPDATE blogs SET title = $1, content = $2, images = $3,updated_at = NOW() WHERE id = $4;",
      [id.title, id.content, id.image, id.id]
    );

    return res
      .status(200)
      .json(new ApiResponse(200, result, "OK", "blog edited sucsessfully"));
  } catch (err) {
    return res
      .status(501)
      .json(new ApiError(501, "Error", "Error while editing data"));
  }
}