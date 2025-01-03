import { ApiResponse } from "../../utils/ApiResponse.js";
import { ApiError } from "../../utils/ApiError.js";
import db from "../../db/db.js";

export async function postcomment(req, res) {
  const { bid, uid } = req.params;
  const { content } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO comments (blog_id,user_id,content) VALUES ($1,$2,$3)",
      [bid, uid, content]
    );
    setTimeout(() => {
      return res
        .status(200)
        .json(new ApiResponse(200, "ok", "successfully added comment"));
    }, 2000);
  } catch (error) {
    console.log(error);
    return res.status(501).json(new ApiError());
  }
}
