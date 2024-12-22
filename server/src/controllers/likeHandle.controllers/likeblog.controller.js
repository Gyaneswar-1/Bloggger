import db from "../../db/db.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { ApiError } from "../../utils/ApiError.js";

export async function likeblog(req, res) {
  const { bid, uid } = req.params;
  try {
    const result = await db.query(
      "INSERT INTO user_likes (user_id,blog_id) VALUES ($1,$2) RETURNING *",
      [uid, bid]
    );
    return res.status(200).json(new ApiResponse(200,result.rows[0],"Success","User follwed"))
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(new ApiError(500, "Failed", "failed to like the blog"));
  }
}
