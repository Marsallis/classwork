const {model, Schema} = require('mongoose');

const hotelSchema = new Schema({
    name: {type: String, required: true, unique: true},
    location: String,
    rating: {type: Number, maxValue: 5},
    vacancies: Boolean,
    tags: [String],
    rooms: [{roomNumber: Number, size: String, price: Number, booked: Boolean}]
})

const Hotels = model('Hotels', hotelSchema);

module.exports = Hotels;