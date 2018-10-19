module.exports = (req , res) => {
    console.log(req.session.registrationError)

    res.render('register' , {
        errors : req.session.registrationError
    });
}