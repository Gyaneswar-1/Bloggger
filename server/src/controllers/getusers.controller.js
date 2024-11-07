import db from "../db/db.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export async function getusers(req, res) {
    try {
        const result = await db.query("SELECT * FROM users");
        return res.status(200).json(new ApiResponse(200, "Users fetched successfully", result.rows));
    } catch (error) {
        console.error("Error while fetching user data:", error);
        return res.status(500).json(new ApiResponse(500, "Internal Server Error", error.message));
    }
}