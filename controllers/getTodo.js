const Todo = require('../models/Todo');

exports.getTodo = async(req,res)=>{
    try{
        //fetch all todo items from database;
        //we did not give any parameter in find function which basically means give me all the data.
        const todos = await Todo.find({});

        //response
        res.status(200).json({
            success:true,
            data:todos,
            message:"Entire todo Data is fetched",
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Server Error",
        })
    }
}

exports.getTodoById = async (req,res)=> {
    try{
        //exract todo items by id
        const requiredId = req.params.id;

        const todoById = await Todo.findById({_id : requiredId});
        //_id isliye liye kyuki db k json mai _id se save hori hai id.
        
        //data for given Id not found
        if(!todoById){
            return res.status(404).json({
                success:false,
                message:"No data found with given Id"
            })
        }
        //data for given id is found

        res.status(200).json({
            success:true,
            data:todoById,
            message:`Todo ${requiredId} is fetched based on Id`,
        })

    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Server Error",
        })
    }
}