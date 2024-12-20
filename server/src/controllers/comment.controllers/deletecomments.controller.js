import { ApiResponse } from "../../utils/ApiResponse.js";
import { ApiError } from "../../utils/ApiError.js";
import db from "../../db/db.js";

export async function deletecomments(req, res) {
  const { bid, uid } = req.params;
  try {
    const result = await db.query(
      "DELETE FROM comments WHERE blog_id=$1 AND user_id=$2 RETURNING * ",
      [bid, uid]
    );
    return res
      .status(400)
      .json(new ApiResponse("ok", "Successfully Deleted", result.rows));
  } catch (error) {
    console.log(error);
    return res.status(501).json(new ApiError("Cannot deleted"));
  }
}
