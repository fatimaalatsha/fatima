const router = require('express').Router();
const login = require('../models/login.model');


router.route('/').get((req, res) => {
    login.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/login').post(async (req, res) => {
    const username = req.body.username;
    const hashedPassword =  await bcrypt.hash(req.body.password, 10)
    
    //const password = req.body.password;
    const aUser = new aUser({username:username,password:hashedPassword});
    //console.log(hashedPassword)
    newUser.find()
    .then(()=> res.redirect('/add'))
    .catch(err => res.redirect('/adduser'))
     });

  module.exports= router;
