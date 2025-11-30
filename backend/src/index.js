const express = require("express");
const app = express();
require('dotenv').config();
const main=require("./config/db")
const driverroutes=require("./Routes/driverroutes")

const cors = require("cors");
app.use(cors({
  origin: "https://zohotruckmate.vercel.app", // allow only your frontend
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

app.use(express.json());

app.use("/driver",driverroutes)



const InitializeConnection=async()=>{
  try{
    await Promise.all([main()]);
    console.log("DB connected !")
    app.listen(process.env.PORT,()=>{
     console.log("server is listening !"+process.env.PORT);})

  }
  catch(err){
    console.log("Error"+err)
  }
}
InitializeConnection();
