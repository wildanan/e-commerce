var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let cartSchema = new Schema({
    buyerId : String,
    itemId : String,
    itemName : String,
    itemPrice : String,
    itemImage : String
})

let Cart = mongoose.model('Carts', cartSchema)

module.exports = Cart