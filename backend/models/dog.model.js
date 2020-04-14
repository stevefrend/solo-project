const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const dogSchema = new Schema({
    name: {type: String, required: true },
    ageInMonths: {type: Number, required: true },
    breed: {type: String},
    sex: {type: String, required: true}
});

const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;