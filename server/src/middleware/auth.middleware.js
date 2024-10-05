import jwt from 'jsonwebtoken';
import { ApiResponse } from '../utils/ApiResponse.js';


export const authenticationToken = (req, res, next) => {
  const JWT_SECRET = 'Gyaneswar'; // Consider storing this in an environment variable
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.log(authHeader);
    
    return res.status(401).json(new ApiResponse(401, 'Access Denied', 'No token provided'));
  }
  
  const token = authHeader.split(' ')[1]; // Extract the token from "Bearer <token>"

  try {
    const verified = jwt.verify(token, JWT_SECRET); // Verify token
    req.user = verified; // Store user info from token in request object
    next(); // Call next middleware only after successful verification
  } catch (error) {
    return res.status(403).json(new ApiResponse(403, 'Invalid Token', 'Failed to authenticate token'));
  }
};