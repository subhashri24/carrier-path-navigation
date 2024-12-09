// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profile: {
        name: String,
        email: String,
        phone: String,
        bio: String,
    },
});

module.exports = mongoose.model('User', userSchema);
