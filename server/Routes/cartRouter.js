const express = require('express')
const router = express.Router()
const cartRouter = require('../Controllers/cartController')

const {Authentication} = require('../Middleware/auth')

router.post('/addToCart/:buyerId/:itemId', Authentication, cartRouter.addToCart)
router.get('/showCart/:buyerId', Authentication, cartRouter.showAll)
router.delete('/deleteCart/:cartId', Authentication, cartRouter.deleteCart)

module.exports = router