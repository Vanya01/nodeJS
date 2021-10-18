const {Schema, model} = require('mongoose');

const userRole = require('../config/user-role');

const userSchema = new Schema({
    login: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    role: {
        type: String,
        default: userRole.USER,
        enum: Object.values(userRole)
    }
}, {timestamps: true});

module.exports = model('user', userSchema);
