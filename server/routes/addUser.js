const router = require('express').Router();
const AddUser = require('../models/user.model');
//const User = require('../models/user.model');
const bcrypt = require('bcrypt')


router.route('/').get((req, res) => {
    AddUser.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/adduser').post(async (req, res) => {
   const username = req.body.username;
   const hashedPassword =  await bcrypt.hash(req.body.password, 10)
   const phone = req.body.phone;
   const address = req.body.address;
   //const password = req.body.password;
   const newUser = new AddUser({username:username,password:hashedPassword, phone: phone, address:address });
   //console.log(hashedPassword)
   newUser.save()
  //  .then(()=> res.redirect('/login'))
  //  .catch(err => res.redirect('/add')
    });

    module.exports= router;
    ////