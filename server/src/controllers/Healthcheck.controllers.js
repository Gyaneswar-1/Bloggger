import { ApiResponse } from "../utils/ApiResponse.js";
import {asyncHandler}  from "../utils/asyncHandler.js"

// const healthcheck =asyncHandler ( async ( req,res)=>{
//     return res.status(200).json(new ApiResponse(200,"OK","Healthcheck Passed"))
// })

// export {healthcheck}

export async function healthcheck(req,res) {
    
    return res.status(200).json(new ApiResponse(200,"OK","Healthcheck Passed"))
}