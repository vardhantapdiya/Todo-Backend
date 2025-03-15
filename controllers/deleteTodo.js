const Todo = require('../models/Todo');

exports.deleteTodo = async(req,res) => {
    try{
        const id = req.params.id;
        //did the below one myself for fund and ungli karna seekhne k liye
        // const {title,description} = req.body;
        await Todo.findByIdAndDelete({_id : id});

        res.status(200).json({
            success:true,
            message:`Todo deleted for id = ${id}`,
            // title:title,
            // description:description,
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