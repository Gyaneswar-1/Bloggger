import express from "express";
import cors from "cors";
// import session from "express-session";
// import cookieParser from "cookie-parser";


const app = express();

// app.use(
//     cors({origin:process.env.CORS_ORIGIN,credentials:true})
// )

app.use(
    cors()
)

app.use(express.json())
// app.use(express.json({limit:16kb}))
app.use(express.urlencoded({extended:true}))
// app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))

// import routes

import accounthandle from "./routes/accounts.route.js";

// routes

app.use("/api/v1",accounthandle)

export {app}