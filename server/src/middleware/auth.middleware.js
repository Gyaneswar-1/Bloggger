import jwt from "jsonwebtoken";
import { ApiResponse } from "../utils/ApiResponse.js";
export const authenticationToken = (req, res) => {
  JWT_SECRET=Gyaneswar
  const token = res.headers["authorization"];
  if (!token) {
    // return res.status(200).json(new ApiResponse(200, "OK", "User logged in",token));
    return res.status(200).json({ message: "Access Denied" });
  } else {
    try {
        const verified = jwt.verify(token.split(" ")[1],JWT_SECRET);
        req.user=verified;
    } catch (error) {
      res.status(400).json(new ApiResponse(400,'Invalid Token'))
    }
  }
};


