const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please provide your Username'],
        unique: [true, 'Username already Exists']
    },

    email: {
        type: String,
        required: [true, 'Please provide your Email'],
        unique: [true, 'Email already Existed']
    },

    password: {
        type: String,
        required: [true, 'Please provide your Password']
    }
});

UserSchema.pre('save', function (next) {
    const user = this;

    bcrypt.hash(user.password, 10, function (err, encrypted) {
        user.password = encrypted;
        next();
    });
});

const User = mongoose.model('User', UserSchema)

module.exports = User;