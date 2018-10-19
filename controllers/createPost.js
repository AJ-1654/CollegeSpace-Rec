module.exports = (req , res) => {
    console.log('prsent here');
    if(req.session.userId) {
      return res.render('create');
    }

    res.redirect('/auth/login')
}