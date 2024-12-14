import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import db from "../db/db.js";
export async function getcomment(req, res) {
  const { bid } = req.params;
  try {
    const result = await db.query("SELECT * FROM comments WHERE blog_id=$1", [
      bid,
    ]);
    return res
      .status(200)
      .json(new ApiResponse(200, result.rows, "Comment fetched success fully"));
  } catch (error) {
    console.log(error);
    return res.status(501).json(new ApiError());
  }
}
