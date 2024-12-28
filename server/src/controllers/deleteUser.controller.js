import db from "../db/db.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { deleteImage } from "../middleware/cloudinaryImage.middleware.js";

export async function deleteUser(req, res) {
  const email = req.body.email;

  try {
    const result = await db.query(
      "DELETE FROM users WHERE email=$1 RETURNING *",
      [email]
    );
    console.log("user data after delete", result);

    try {
      if (result.rows[0].pfp !== null) {
        await deleteImage(result.rows[0].pfp);
      } else {
        return res
          .status(200)
          .json(new ApiResponse(200, "Deleted", "User deleted"));
      }
    } catch (error) {
      console.error("Unable to delete image:", error);
    }
    return res
      .status(200)
      .json(new ApiResponse(200, "Deleted", "User deleted"));
  } catch (error) {
    console.log("An error occured", error);
  }
}
