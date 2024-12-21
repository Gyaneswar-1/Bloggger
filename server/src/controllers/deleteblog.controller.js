import db from "../db/db.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export async function deleteblog(req, res) {
  const { id, uid } = req.params;

  try {
    const result = await db.query(
      "DELETE FROM blogs WHERE id = $1 AND user_id = $2 RETURNING *",
      [id, uid]
    );

    if (result.rowCount === 0) {
      return res
        .status(404)
        .json(
          new ApiError(
            404,
            "Blog not found",
            "No blog found with the given id and user id"
          )
        );
    }

    res
      .status(200)
      .json(new ApiResponse(200, "Blog deleted successfully", result.rows[0]));
  } catch (error) {
    console.error("Error deleting blog: ", error);
    return res
      .status(500)
      .json(new ApiError(500, "Internal Server Error", error.message));
  }
}
