import pg from "pg";
import dotenv from "dotenv";
dotenv.config({path:"./.env"});
// const db = new pg.Client("postgresql://blog_owner:U1pLS5NEmIbv@ep-soft-voice-a8iy3v9j.eastus2.azure.neon.tech/blog?sslmode=require");

const db = new pg.Client({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT,
});

export default db;