import db from "../db/db.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export async function getBlogByID(req, res) {
  const { id } = req.params; // Destructure id from req.params
  try {
    const result = await db.query(`SELECT * FROM blogs WHERE id = $1`, [id]); // Use parameterized query
    
    return res.json(result.rows);
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, "Api Error", "This is an API error"));
  }
}