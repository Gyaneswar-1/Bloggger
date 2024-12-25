import db from "../../db/db.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
export async function getlike(req, res) {
  const {bid} = req.params;
  try {
    const result = await db.query(
      "select user_id from user_likes WHERE blog_id=$1",
      [bid]
    );
    const ids = result.rows.map(row => row.user_id);
    return res
      .status(201)
      .json(
        new ApiResponse(201, "Success", ids, "Get likes sucess")
      );
  } catch (error) {
    console.log(error);
    return res.status(500).json(new ApiError(500, error, "No Likes"));
  }
}
