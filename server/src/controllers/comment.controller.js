import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import db from "../db/db.js";

export async function comment(req,res){

    const {bid,uid}=req.params
    const {content} = req.body
    try {
        console.log(bid,uid,content);
        
        const result = await db.query("INSERT INTO comments (blog_id,user_id,content) VALUES ($1,$2,$3)",[bid,uid,content]) 
        return res.status(200).json(new ApiResponse(200,"ok","successfully added comment"))
    } catch (error) {
        console.log(error);
        return res.status(501).json("Error occured")
    }
}

