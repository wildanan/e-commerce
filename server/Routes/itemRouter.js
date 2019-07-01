const express = require('express')
const router = express.Router()
const itemController = require('../Controllers/itemController')
let {Authorization} = require('../Middleware/auth')

router.post('/addItem', Authorization, itemController.addItem)
router.get('/allItem', itemController.showAll)
router.get('/detail', itemController.detail)
router.patch('/editItem/:artId', itemController.edit)
router.delete('/delete/:id', itemController.delete)

module.exports = router