const mongoose = require('mongoose');

const sch = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type: String,
        required: true
    }
})

const Blog = new mongoose.model("Blog", sch);

module.exports = Blog;