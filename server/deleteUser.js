import db from "./config/db.js";
import bcrypt from "bcrypt";

export async function deleteUser(email, password) {
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
    } else {
      console.log("email and password did not match");
    }
  } catch (error) {
    console.log("An error occured", error);
  }
}
