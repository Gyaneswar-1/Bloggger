import db from "../db/db.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {ApiError} from "../utils/ApiError.js"

export async function postnewblogs(req,res){
    const {title,content,user_id} = req.body;

    try {
        await db.query("INSERT INTO blogs (title,content,user_id) VALUES ($1,$2,$3)",[title,content,user_id]);    
        return res.status(201).json(new ApiResponse(401, "Success", "New blog uploded"));
    } catch (error) {
        return res.status(401).json(new ApiError(401, "Error", "did not added something went wrong"));
    }
}

