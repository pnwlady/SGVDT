const express = require('express');
const User = require(__dirname + '/../model/user');
const jsonParser = require('body-parser').json();
const basicHTTP = require(__dirname + '/../lib/basic_http');

var router = module.exports = exports = express.Router();

router.post('/signup', jsonParser, (req, res) => {
  var password = req.body.password;
  var zipcode = req.body.zipcode;
  req.body.password = null;

  if (!password) {
    return res.status(500).json({ msg: 'add a password' });
  }

  if (!zipcode) {
    return res.status(500).json({ msg: 'add your zipcode' });
  }

  var newUser = new User(req.body);
  var zipcode = req.body.zipcode;
  newUser.generateHash(password);
  password = null;

  newUser.save((err, user) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ msg: 'could not create user' });
    }

    var token = user.generateToken();

    if (err) {
      return res.status(500).json({ msg: 'could not generate token' });
    }
    res.json({ token });
  });
});

router.get('/signin', basicHTTP, (req, res) => {
  User.findOne({ username: req.auth.username }, (err, user) => {
    if (err) {
      return res.status(500).json({ msg: 'no authentication' });
    }

    if (!user) {
      return res.status(500).json({ msg: 'no user' });
    }

    if (!user.compareHash(req.auth.password)) {
      return res.status(500).json({ msg: 'could not authenticate' });
    }

    var token = user.generateToken();
    if (err) {
      return res.status(500).json({ msg: 'could not generate token' });
    }
    res.json({ token });
  });
});
