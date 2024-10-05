
// home.controller.js
import db from '../db/db.js';
import { ApiResponse } from '../utils/ApiResponse.js';

export async function homepage(req, res) {
  try {
    // Fetch data from database (assuming `blogs` is the correct table)
    
    const data = await db.query('SELECT * FROM blogs');
    const result = data.rows;
    
    // Return the fetched data as a JSON response
    return res.json({result})
    // return res.status(200).json(new ApiResponse(200, 'OK', result));
  } catch (error) {
    console.error(error); // Log the error
    return res.status(500).json(new ApiResponse(500, 'Internal Server Error', 'Something went wrong'));
  }
}
