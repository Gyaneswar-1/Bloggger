import pg from "pg";
// import dotenv from "dotenv";

// const db = new pg.Client("postgresql://blog_owner:U1pLS5NEmIbv@ep-soft-voice-a8iy3v9j.eastus2.azure.neon.tech/blog?sslmode=require");

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "blog",
  password: "@Gyana87356",
  port: 5432,
});


export default db;
