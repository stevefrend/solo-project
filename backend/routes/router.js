const express = require('express');
const Dog = require('../models/dog.model');
const User = require('../models/user.model');
const router = express.Router();
const bcrypt = require('bcrypt');

router.post('/validateUser', (req, res) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      res.status(400).json({ 'Error when finding user in DB': err });
    } else {
      bcrypt
        .compare(req.body.password, user.password)
        .then((result) => {
          if (result) {
            res.cookie('testCookie', 'hello');
            res.status(200).json({ username: user.username, dogList: user.dogList });
          } else res.sendStatus(400);
        })
        .catch((err) => res.status(400).json('bcrypt failed validation'));
    }
  });
});

router.put('/addDogToUser', (req, res) => {
  const { username, dogList } = req.body;
  User.findOneAndUpdate(
    { username: username },
    { dogList: dogList },
    { new: true, useFindAndModify: false }
  )
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.post('/createUser', (req, res) => {
  const { username, password } = req.body;
  // check if username already exists in User db. add if not, error if yes.
  User.exists({ username: username }).then((result) => {
    if (!result) {
      const newUser = new User({
        username,
        password,
      });
      newUser
        .save()
        .then((result) =>
          res.status(200).json({ username: result.username, dogList: result.dogList })
        )
        .catch((err) => res.status(400).json(err));
    } else {
      res.status(400).json('Username already exists');
    }
  });
});

module.exports = router;
