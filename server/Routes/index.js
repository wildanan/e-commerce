const express = require('express')
const router = express.Router()

//require to child router
const userRouter = require('./userRouter')
const itemRouter = require('./itemRouter')
const cartRouter = require('./cartRouter')
//authentication
const {Authentication} = require('../Middleware/auth')

//router use
router.use('/user', userRouter)

// router.use(Authenticate)
router.use('/item', itemRouter)

router.use('/cart', cartRouter)

module.exports = router