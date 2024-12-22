import db from "../db/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ApiResponse } from "../utils/ApiResponse.js";
import passport from "passport";
import GoogleStrategy from "passport-google-oauth2";

const saltround = 10;
const JWT_SECRET = process.env.JWT_SECRET;

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
          // passport.use(
          //   new GoogleStrategy(
          //     {
          //       clientID: process.env.GOOGLE_CLIENT_ID,
          //       clientSecret: process.env.GOOGLE_CLIENT_SECRETS,
          //       callbackURL: "http://localhost:3000/auth/google/callback",
          //     },
          //     (accessToken, refreshToken, profile, done) => {
          //       return done(null, profile);
          //     }
          //   )
          // );

          passport.serializeUser((user, done) => done(null, user));
          passport.deserializeUser((user, done) => done(null, user));
          
          const token = jwt.sign({ result }, JWT_SECRET, { expiresIn: "3h" });

          return res
            .status(200)
            .json(
              new ApiResponse(200, result.rows[0].id, "User logged in", token)
            );
        }
      });
    }
  } catch (err) {
    console.log("an error occurrd", err);
    throw err;
  }
}
