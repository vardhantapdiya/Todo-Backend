//import the model
const { response } = require("express");
const Todo = require("../models/Todo");

//define route handler
exports.createTodo = async(req,res)=>{
    try{
        //extract title and description from request body
        const{title,description} = req.body; //cannot do this without middleware express.json()
        //create a new Todo Obj and insert in DB
        const response = await Todo.create({title,description});
        //create() is a mongoose libreary function used to create data in the db. Search mongoose library functions to learn more about it and the others.

        //send a json resp with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry Created Successfully"
            }
        )
    }
    catch(err){
        console.error(err);
        console.log(er);
        res.status(500).json(
            {
                success:false,
                data:"Internal server error",
                message:err.message,
            }
        )
    }
}