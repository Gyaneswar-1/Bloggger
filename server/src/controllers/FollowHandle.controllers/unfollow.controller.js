import db from "../../db/db.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
export async function unfollow(req, res) {
  try {
    const fid = req.body.id; // here the id is the follower id who follow another user
    console.log(req.body.fid);
    const id = req.params.uid; // here the fid is the user who get followed by the id
    console.log(req.params.uid);
    const result = await db.query(
      "DELETE FROM follows WHERE follower_id=$1 AND followed_id=$2",
      [fid, id]
    );
    return res
      .status(201)
      .send(new ApiResponse(201, result, "unfollowed User"));
  } catch (error) {
    return res.status(406).send(new ApiError(404, "Can not unfollow"));
  }
}
