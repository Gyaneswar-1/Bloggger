import db from "../db/db.js";
import bcrypt from "bcrypt";
import { ApiResponse } from "../utils/ApiResponse.js";


export async function deleteUser(req,res) {
  const{email, password}  = req.body;
  // const useremail = email;
  // const userpassword = password;
  try {
    const user = await db.query("SELECT * FROM users WHERE email=$1", [email]);
    // const dbpassword = toString(
    //   await db.query("SELECT user_password FROM users WHERE email=$1", [email])
    // );

    const comparePass = await bcrypt.compare(
      password,
      user.rows[0].user_password
    );
    const compareEmail = user.rows[0].email === email;
    /* console.log(email);
     console.log(user.rows[0].email);
     console.log(password);
     console.log(user.rows[0].user_password);
     console.log(comparePass); */

    if (compareEmail && comparePass) {
      const result = db.query("DELETE FROM users WHERE email=$1", [email]);
      return res.status(200).json(new ApiResponse(200,"Deleted","User deleted"))
    } else {
      console.log("email and password did not match");
      return res.status(400).json(new ApiResponse(400,"Deleted","Email and password didnot match"))
    }
  } catch (error) {
    console.log("An error occured", error);
  }
}
