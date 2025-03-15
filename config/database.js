const mongoose = require('mongoose');

require('dotenv').config

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log("DB ka conncetion is Successful"))
    .catch((error)=>{
        console.log("Error in DB connection");
        console.error(error.message);
        process.exit(1);
    })
}

//this is the way to export in backend;
module.exports = dbConnect;