module.exports = (req , res) => {
   // console.log( 'flash retain' + req.flash('data'))

    res.render('register' , {
        errors : req.flash('registrationErrors'),
        data : req.flash('data')[0]
    });
}