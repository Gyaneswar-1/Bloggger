import { ApiResponse } from "../../utils/ApiResponse.js";
import { ApiError } from "../../utils/ApiError.js";
import db from "../../db/db.js";

export async function deletecomments(req, res) {
  const { cid } = req.params;
  try {
    const result = await db.query(
      "DELETE FROM comments WHERE id=$1 RETURNING *",
      [cid]
    );
    return res
      .status(200)
      .json(new ApiResponse("ok", "Successfully Deleted", result.rows));
  } catch (error) {
    console.log(error);
    return res.status(501).json(new ApiError("Cannot delete comment"));
  }
}