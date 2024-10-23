import jwt from "jsonwebtoken";
import { ApiResponse } from "../utils/ApiResponse.js";

export const authenticationToken = (req, res, next) => {
  const JWT_SECRET = process.env.JWT_SECRET;
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json(new ApiResponse(401, "Access Denied", "No token provided"));
  }

  const token = authHeader.split(" ")[1];

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    return res
      .status(403)
      .json(
        new ApiResponse(403, "Invalid Token", "Failed to authenticate token")
      );
  }
};
