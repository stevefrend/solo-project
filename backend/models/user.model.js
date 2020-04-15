const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new Schema({
    username: {type: String, required: true , unique: true},
    password: {type: String, required: true },
    dogList: {type: Array, required: true}
});
userSchema.pre('save', function(next) {
    bcrypt.hash(this.password, saltRounds)
      .then(hash => {
        this.password = hash;
        return next();
      })
})
const User = mongoose.model('User', userSchema);

module.exports = User;