const { default: mongoose } = require('mongoose');
const mogoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            maxLength: 50,
        },
        description: {
            type: String,
            required: true,
            maxLength: 50,
        },
        createdAt: {
            type: Date,
            required: true,
            default: Date.now(),
        },
        updatedAt: {
            type: Date,
            required: true,
            default: Date.now(),
        }
    }
)

module.exports = mongoose.model("Todo", todoSchema);
//Todo is name and todoSchema is schema. Basically apan export islie kar rahe hai taaki controller is schema ko use kar sake,
//Todo naam se, Todo ki jagah kuchh aur naam bhi likh sakta hai, jisse bhi tujhe is schema ko use karna ho.