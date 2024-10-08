import pg from "pg";
import dotenv from "dotenv";

// Load environment variables from .env file
// dotenv.config({
//     path:"../.env"
// })

// const db = new pg.Client({
//     user: process.env.USER,
//     host: process.env.HOST,
//     database: process.env.DATABASE,
//     password: process.env.PASSWORD,
//     port: process.env.DB_PORT,
// });

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "blog",
  password: "@Gyana87356",
  port: 5432,
});

// db.connect();

export default db;
