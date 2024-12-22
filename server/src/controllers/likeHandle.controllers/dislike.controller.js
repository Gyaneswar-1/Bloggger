import db from "../../db/db.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
export async function dislike(req, res) {
  const { bid, uid } = req.params;
  try {
    const result = await db.query(
      "DELETE FROM user_likes WHERE user_id=$1 AND blog_id=$2 RETURNING *",
      [uid, bid]
    );
    return res
      .status(201)
      .json(
        new ApiResponse(201, result.rows, "Success", "user deleted successfully")
      );
  } catch (error) {
    console.log(error);
    return res.status(501).json(new ApiError(501, "error", error));
  }
}
