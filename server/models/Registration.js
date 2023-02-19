const mongoose = require('mongoose');


const registrationSchema = mongoose.Schema({
    username: {type: String, required: true, min:4, unique: true},
    password: {type: String, required: true }
})

const User = mongoose.model('User', registrationSchema);

module.exports = User
