import db from "../db/db.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

export async function deleteblog(req,res) {
    const {id1,id2} = req.params;
    console.log(req.params);

    return res.status(500).json(new ApiError(500,"wrong data entered","error"))
    
    // try {
    //     await db.query("DELETE FROM blogs WHERE id=$1",[id])
        
    //     return res.status(200).json(new ApiResponse(200,"success","blog deleted successfully"))
    // } catch (error) {
        // return res.status(500).json(new ApiError(500,"wrong data entered","error"))
    // }
}