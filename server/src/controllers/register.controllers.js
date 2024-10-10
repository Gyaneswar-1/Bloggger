import db from "../db/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ApiResponse } from "../utils/ApiResponse.js";

const saltround = 10;
const JWT_SECRET = "Gyaneswar";

export async function register(req, res) {
  const { email, username, password, pfp } = req.body;

  try {
    const checkEmail = await db.query("SELECT * FROM users WHERE email=$1", [
      email.trim(),
    ]);
    const checkUsername = await db.query(
      "SELECT * FROM users WHERE username=$1",
      [username.trim()]
    );

    if (checkEmail.rows.length > 0 || checkUsername.rows.length > 0) {
      console.log("user already exist");
      return res
        .status(300)
        .json(new ApiResponse(300, "Cannot registered", "User already exists"));
    } else {
      await bcrypt.hash(password, saltround, async (err, hash) => {
        if (err) {
          console.log("an error occured", err);
        } else {
          const result = await db.query(
            "INSERT INTO users (username,email,user_password,pfp) VALUES ($1,$2,$3,$4) RETURNING *",
            [username, email, hash, pfp]
          );
          const token = jwt.sign({ result }, JWT_SECRET, { expiresIn: "3h" });
          console.log("User registered");
          console.log(result);

          return res
            .status(200)
            .json(new ApiResponse(200, result.rows[0].id, "User logged in", token));
        }
      });
    }
  } catch (err) {
    console.log("an error occurrd", err);
    throw err;
  }
}
