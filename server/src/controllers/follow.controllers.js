import db from "../db/db.js";
import { ApiResponse } from "../utils/ApiResponse.js";
export async function follow(req, res) {
  // const {uid,fid} = req.params
  const data = req.params;
  try {
    console.log(data);
    const result = db.query("")
    return res.status(201).send(new ApiResponse(201, data, "New response"));
  } catch (error) {}
}
