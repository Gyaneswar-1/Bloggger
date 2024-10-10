import db from "../db/db.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export async function deleteUser(req, res) {
  const email = req.body.email;
  console.log("get email: ",req.body.email);
  

  try {
    const result = await db.query("DELETE FROM users WHERE email=$1", [email]);
    return res
      .status(200)
      .json(new ApiResponse(200, "Deleted", "User deleted"));
  } catch (error) {
    console.log("An error occured", error);
  }
}
