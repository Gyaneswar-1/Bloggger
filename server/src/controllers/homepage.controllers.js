import db from "../db/db.js";
// import {ApiError} from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js";

export async function homepage(req,res){
    try {
        if (true) {
            const data = await db.query("SELECT * FROM blogs");
            const result = data.rows[0];
            console.log(result);
            return res.json({result})
            // return res.status(200).json(new ApiResponse(200, "OK", "User logged out"));
        }
    } catch (error) {
        console.log(error);
        // ApiError(error)
    }
}
