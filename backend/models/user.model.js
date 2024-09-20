const mongoose = require('mongoose');
const Schema = mongoose.Schema
//updated line of code for testing purposes try infinite for testing the new feature.
const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        minlength: 3
    },

    password:{
        type: String,
        required: true,
        trim: true,
        minlength: 3

}},
    {
        timestamps: true
    })

const user = mongoose.model('User', userSchema);
module.exports = user;      