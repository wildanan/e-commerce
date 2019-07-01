const Item = require('../Models/itemModels')

class itemController{
    static addItem(req, res, next){
        let {itemName, stock, price, image, description} = req.body
        let newItem = new Item({itemName, stock, price, image, description})
        newItem.save()
        .then(saved => {
            console.log('terbuat')
            res.status(200).json(saved)
        })
        .catch(next)
    }
    static delete(req, res, next){
        let msg = 'item has been deleted'
        Item.findByIdAndDelete({
            _id : req.params.id
        })
        .then(() => {
            res.status(200).json(msg)
        })
    }
    static showAll(req, res, next){
        Item.find({})
        .then(allData =>{
            res.status(200).json(allData)
        })
        .catch(next)
    }
    static detail(req, res, next){
        Item.findOne({
            _id : req.params.id
        })
        .then(found => {
            res.status(200).json(found)
        })
        .catch(next)
    }
    static edit(req, res, next){
        console.log('masuk ke update')
        let msg = 'updated'
        let updated = {}
        if(req.body.itemName){
            updated.itemName = req.body.itemName
        }
        if(req.body.price){
            updated.price = req.body.price
        }
        if(req.body.stock){
            updated.stock = req.body.stock
        }
        console.log(updated, 'ini isi updatenya apa ya?')
        Article.findOneAndUpdate({
            _id : req.params.artId
        }, updated)
        .then(()=>{
            res.status(200).json(msg)
        })
        .catch(next)
    }

}

module.exports = itemController

