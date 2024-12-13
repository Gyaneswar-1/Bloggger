// home.controller.js
import db from "../db/db.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export async function homepage(req, res) {
  try {
    const data = await db.query("SELECT blogs.*, users.username, users.pfp FROM blogs JOIN users ON blogs.user_id = users.id")

    const result = data.rows;

   setTimeout(()=>{
    return res.json({ result });
   },2000)

  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json(
        new ApiResponse(500, "Internal Server Error", "Something went wrong")
      );
  }
}
