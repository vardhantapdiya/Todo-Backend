const express = require('express');
const app = express(); //app basically server ka naam dena

//load config from env file
require("dotenv").config(); //isse process object main .env ki configurations load hojati hai
const PORT = process.env.PORT || 4000;


//middleware to parse json request body
app.use(express.json());


//import routes for "TODO API"
const todoRoutes = require("./routes/todos");
//mount or add or append the todo API routes
app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})


//connect to the database
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/",(req,res)=>{
    res.send(`<h1> This is HOMEPAGE</h1>`);
})