import { app } from "./app.js";
import db from "./db/db.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 4000;

db.connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running in port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`error ${err}`);
});
