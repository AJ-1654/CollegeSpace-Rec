const User = require('../database/models/User');

module.exports = (req , res) => {
    User.create( req.body , (err , user) => {
        if(err) {
            const registrationError = Object.keys(err.errors).map(key => err.errors[key].message);

            req.session.registrationError = registrationError;
            return res.redirect('/auth/register');
        }
        res.redirect('/');
    })
}