var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let itemSchema = new Schema({
    itemName : String,
    stock : Number,
    description : String,
    price : String,
    image : String
})

let Item = mongoose.model('Items', itemSchema)

module.exports = Item