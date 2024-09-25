import db from "../db/db.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const saltround = 10;
const jwtSecret = "chin_tapak";

export async function login(req, res) {
  const { email, password } = req.body;
  try {
    const result = await db.query("SELECT * FROM users WHERE email=$1", [email]);
    if (result.rows.length === 0) {
      return res.status(404).json(new ApiResponse(404, "Not Found", "User not found"));
    }
    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.user_password);
    const isEmailMatch = user.email === email;

    if (isMatch && isEmailMatch) {
      const token = jwt.sign({ id: user.id, email: user.email }, jwtSecret, { expiresIn: "1h" });
      console.log(token);
      res.cookie('token', token, { httpOnly: true, secure: true, maxAge: 3600000 }); // 1 hour
      return res.status(200).json(new ApiResponse(200, "OK", "User logged in",token));
    } else {
      return res.status(401).json(new ApiResponse(401, "Unauthorized", "Invalid credentials"));
    }
  } catch (error) {
    console.log("error: ", error);
    return res.status(500).json(new ApiResponse(500, "Internal Server Error", "An error occurred"));
  }
}

export async function logout(req, res) {
  res.clearCookie('token');
  return res.status(200).json(new ApiResponse(200, "OK", "User logged out"));
}
 