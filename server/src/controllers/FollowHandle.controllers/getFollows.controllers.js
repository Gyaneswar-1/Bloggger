import db from "../../db/db.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

export async function getFollows(req, res) {
  // const {id}  = req.params; 
  const id  = req.params; 
  try {
    const result = await db.query(
      "SELECT * FROM follows WHERE follower_id=$1",
      [id.uid]
    );
    console.log(result);
    return res.status(201).send(new ApiResponse(201, result.rows, "followed user"));
  } catch (error) {
    console.error(error);
    return res.status(404).send("Not followers");
  }
}
