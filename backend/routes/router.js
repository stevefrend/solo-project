const express = require('express');
const Dog = require('../models/dog.model');
const User = require('../models/user.model');
const router = express.Router();

router.get('/:username', (req, res) => {
  User.findOne({ username: req.params.username })
    .then((user) => {
      res.status(200).json({ user })
    })
    .catch((err) => res.status(400).json({ 'Error when finding items in DB': err }));
});

router.put('/addDogToUser', (req, res) => {
  const { username, dogList } = req.body;
  User.findOneAndUpdate({ username: username }, { dogList: dogList }, { new: true })
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
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(400).json(err));
    } else {
      res.status(400).json('Username already exists');
    }
  });
});

module.exports = router;
