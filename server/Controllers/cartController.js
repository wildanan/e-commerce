let Carts = require('../Models/cartModel')
let Item = require('../Models/itemModels')

class Cart{
    static addToCart(req, res, next){
        console.log('masuk ke add to cart')
        Carts.create({
            buyerId : req.params.buyerId,
            itemId : req.params.itemId,
            itemName : req.body.itemName,
            itemPrice : req.body.itemPrice,
            itemImage : req.body.itemImage
        })
        .then(created => {
            res.status(200).json(created)
        })
        .catch(next)
    }
    static showAll(req, res, next){
        console.log('masuk sini?')
        Carts.find({
            buyerId : req.params.buyerId
        })
        .then(found => {
            // console.log(found, 'ini found')
            res.json(found)
            // found.forEach(el => {
            //     console.log(el.itemId, 'ini item id')
            //     Item.find({
            //         _id : el.itemId
            //     })
            //     .then(foundItem => {
            //         res.status(200).json(foundItem)
            //     })
            //     .catch()
            // })
        })
        .catch(next)
    }
    static deleteCart(req, res, next){
        Carts.findOneAndDelete({
            _id : req.params.cartId
        })
        .then(() =>{
            res.status(200).json('deleted 1 item form cart')
        })
        .catch(next)
    }
}

module.exports = Cart