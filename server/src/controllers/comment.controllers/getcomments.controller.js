import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import db from "../../db/db.js";

export async function getcomment(req, res) {
  const { bid } = req.params;
  try {
    const result = await db.query(
      "SELECT comments.*, users.username AS user_name, users.pfp AS user_pfp FROM comments JOIN users ON comments.user_id = users.id WHERE comments.blog_id = $1",
      [bid]
    );
    return res
      .status(200)
      .json(new ApiResponse(200, result.rows, "Comment fetched successfully"));
  } catch (error) {
    console.log(error);
    return res.status(500).json(new ApiError(500, "Internal Server Error"));
  }
}