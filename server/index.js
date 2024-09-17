import express from "express";
import bodyParser from "body-parser";
import {login,register} from "./login.js"
import { deleteUser } from "./deleteUser.js";
import cors from "cors"

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cors())

app.get('/',(req,res)=>{

})

app.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});

app.post("/auth/register", async (req, res) => {
  const {username,email,password} = req.body;
  try {
    await register(email,username,password);
    res.status(201).send({isRegistered:true})
  } catch (error) {
    res.status(500).send('Error registering user')
  }
  console.log(req.body);
})

app.post("/auth/login",async(req,res)=>{
  const{email,password} = req.body;
  try {
    const user = await login(email,password);
    if (user) {
      res.status(200).send({isLogedin:true});
    }else{
      res.status(400).send("Invalid credientials");
    }
  } catch (error) {
    res.status(500).send("Error logging in");
  }
})

app.

app.delete('/delete/user', async (req,res)=>{
  const {email,password} = req.body
  try {
    await deleteUser(email,password)
    res.status(201).send({isDeleted:true})
  } catch (error) {
    res.status(500).send("Error")
  }
})

app.get('/home',(req,res)=>{
  res.json();
})

,app.listen(port, () => {
  console.log(`app is running at ${port}`);
})

