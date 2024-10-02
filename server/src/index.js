import { app } from "./app.js";
import dotenv from "dotenv"
import db from "./db/db.js";

dotenv.config({
  path:"./.env"
})


const PORT = process.env.PORT || 3000;

db.connect().then(()=>{
  app.listen(PORT,()=>{
    console.log(`server is running in port ${PORT}`);
    
  })
}).catch((err)=>{
  console.log(`error ${err}`);
})