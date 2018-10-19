const User = require('../database/models/User');
const bcrypt = require('bcrypt');

module.exports = (req , res) => {
    const { username , password } = req.body;

    User.findOne({ username : username } , (err , user) => {
        
        if(user) {
            bcrypt.compare(password , user.password , (err , result) => {
                if(result) {
                    req.session.userId = user._id;
                    res.redirect('/');
                } else {
                    res.redirect('/auth/login');
                }
            })
        } else {
            return res.redirect('/auth/login');
        }
    })
}