
import db from "../../db/db.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { ApiError } from "../../utils/ApiError.js";

export async function getFollows(req, res) { 
  const id  = req.params; // this id shows that the id follows how many people
  try {
    const result = await db.query(
      'SELECT users.id, users.username,users.pfp FROM follows JOIN users ON follows.followed_id = users.id WHERE follows.follower_id = $1',
      [id.uid]
    );
    console.log(result);
    return res.status(201).send(new ApiResponse(201, result.rows, "followed user"));
  } catch (error) {
    console.error(error);
    return res.status(404).send(new ApiError(404,"error"));
  }
}

