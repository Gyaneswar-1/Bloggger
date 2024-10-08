import db from "../db/db.js";
import { ApiResponse } from "../utils/ApiResponse.js";
export async function getUserBlogs(req, res) {
  const id = req.params;  
  
  try {
    const result = await db.query("SELECT * FROM blogs WHERE user_id=$1",[id.id]);
    if (result) {
      return res
        .status(200)
        .json(new ApiResponse(200, result.rows, "User blog responded", 200));
    } else {
      return res.status(404).json(new ApiResponse(404, "Not found"));
    }
  } catch (error) {
    console.log("Error while fetching the user blogs by id", error);
  }
}
