const express = require('express');
const handleError = require('/../lib/error_handler');
const User = require(__dirname + '/../model/user');
const jsonParser = require('body-parser').json();
const jwtToken = require('/../lib/jwt_auth');
const basicHTTP = require(__dirname + '/../lib/basic_http');
var authRouter = module.exports = exports = express.Router();

authRouter.post('/signup', jsonParser, (req, res) => {
  User.findOne({ 'username': req.body.username }, (req, res) => {
    if (!user) {
      var user = new User();
      user.auth.basic.username = req.body.username;
      user.username = req.body.username;
      // user.zipcode = req.body.zipcode;
      
      user.save((err, data) => {
        if (user.username === '' || req.body.password === '') {
          handleError(err, res);
          data.generateToken((err, token) => {
            res.json({ token: token });
          });
      } else {
        process.stdout.write('user already exists');
        return res.status(401).json({ msg: 'user by that name exists' });
        }
      });
    }
  });
});

authRouter.post('/signup', jsonParser, (req, res) => {
  var newUser = new User(req.body);
  var password = req.body.password;
  req.body.password = null;

  if (!password) {
    return res.status(500).json({ msg: 'add a password' });
  }

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

authRouter.get('/signin', basicHTTP, (req, res) => {
  var token = User.generateToken();
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
    if (err) {
      return res.status(500).json({ msg: 'could not generate token' });
    }
    res.json({ token });
  });
});

authRouter.get('/users', jwtToken, (req, res) => {
  res.json({ username: req.user.username });
});
