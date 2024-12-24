import db from "../db/db.js";
import { ApiError } from "../utils/ApiError.js";

export async function editUserData(req, res) {
  const { id, username, pfp, bio } = req.body;

  try {
    const result = await db.query(
      " UPDATE users SET username=$1,pfp=$2,bio=$3 WHERE id=$4 RETURNING *;",
      [username, pfp, bio, id]
    );
    
    return res.json({ Ok: result.rows });
  } catch (error) {
    console.log(error);
  }
}
