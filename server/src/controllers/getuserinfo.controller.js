import db from "../db/db.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

export async function getuserinfo(req,res){
    const {id} =req.params;
    
    try {
        const result = await db.query("SELECT * FROM users WHERE id=$1",[id])

        return res.status(200).json(result.rows[0])
    } catch (error) {
        console.log(error);
        return res.status(500).json(new ApiError(500,"wrong data entered","error"))
    }
}



