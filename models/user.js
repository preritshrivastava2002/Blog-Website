const mongoose = require('mongoose');

const sch = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = new mongoose.model("User", sch);

module.exports = User;