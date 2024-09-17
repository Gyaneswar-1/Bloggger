import db from "./config/db.js";
// import pg from "pg";
// import express from "express";
// import loginData from "./index";
import bcrypt from "bcrypt";
import {otp} from "./otpGenerator.js"

const saltround = 10;

export async function register(email, username, password) {
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
      bcrypt.hash(password, saltround, async (err, hash) => {
        if (err) {
          console.log("an error occured", err);
        } else {
          const result = await db.query(
            "INSERT INTO users (username,email,user_password) VALUES ($1,$2,$3)",
            [username, email, hash]
          );
          console.log("User registered");
          return result;
        }
      });
    }
  } catch (err) {
    console.log("an error occurrd", err);
    throw err;
  }
}

export async function login(email, password) {
  try {
    const result = await db.query("SELECT * FROM users WHERE email=$1", [email]);
    if (result.rows.length === 0) {
      return null;
    }
    const user = result.rows[0];
    console.log(user.password);
    const isMatch = await bcrypt.compare(password, user.user_password);
    if (isMatch) {
      return user;
    } else {
      return null;
    }
  } catch (error) {
    console.log("error: ", error);
    throw error;
  }
}

// module.exports = {login,register};

// export default {login,register}
