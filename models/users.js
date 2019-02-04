var mongoose = require('mongoose');

var userModel = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,

    },
    state:{
        type: String,

    }
});

var Users = module.exports = mongoose.model('Users', userModel)