import db from "../db/db.js";
// import pg from "pg";
// import express from "express";
// import loginData from "./index";
import bcrypt from "bcrypt";
// import {otp} from "./otpGenerator.js"

const saltround = 10;

export async function register(req,res,next) {
  const {email, username, password} = req.body
  
  try {
    const checkEmail = await db.query("SELECT * FROM users WHERE email=$1", [
      email,
    ]);
    const checkUsername = await db.query(
      "SELECT * FROM users WHERE username=$1",
      [username]
    );

    if (checkEmail.rows.length > 0 || checkUsername.rows.length > 0) {
      console.log("user already exist");
      return { ok: "ok" };
    } else {
      await bcrypt.hash (password, saltround, async (err, hash) => {
        if (err) {
          console.log("an error occured", err);
        } else {
          const result = await db.query(
            "INSERT INTO users (username,email,user_password) VALUES ($1,$2,$3)",
            [username, email, hash]
          );
          console.log("User registered");
          res.json({ok:"ok"})
          return result
        }
      });
    }
  } catch (err) {
    console.log("an error occurrd", err);
    throw err;
  }
}

