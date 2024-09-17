import pg from "pg";

// import dotenv from "dotenv";

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "blog",
    password: "@Gyana87356",
    port: 5432,
});

db.connect();

export default db;