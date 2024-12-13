import db from "../../db/db.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
export async function getFollowers(req, res) {
  const { uid } = req.params;
  console.log(uid);
  try {
    const result = await db.query(
      "SELECT users.id, users.username,users.email,users.bio,users.created_at,users.pfp FROM follows JOIN users ON follows.follower_id = users.id WHERE follows.followed_id = $1",
      [uid]
    );

    return res
      .status(201)
      .send(new ApiResponse("Data send success", result.rows));
  } catch (error) {
    return res.status(501).send(new ApiError());
  }
}
