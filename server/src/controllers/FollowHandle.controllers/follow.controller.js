import db from "../../db/db.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
export async function follow(req, res) {
  const { uid } = req.params;
  const followerID = req.body.id;

  try {
    const existingFollow = await db.query(
      "SELECT * FROM follows WHERE follower_id = $1 AND followed_id = $2",
      [followerID, uid]
    );
    
    if (existingFollow.rows.length > 0) {
      return res
        .status(409)
        .send(new ApiError(409, null, "User already follows this user"));
    }

    
    const result = await db.query(
      "INSERT INTO follows (follower_id,followed_id) VALUES ($1,$2) RETURNING *",
      [followerID, uid]
    );
    return res.status(201).send(new ApiResponse(201, result.rows, "Followed"));
  } catch (error) {
    return res.status(500).send(new ApiError(500, null, "Internal error"));
  }
}
