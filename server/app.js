// require('dotenv').config()
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    require('dotenv').config();
}

const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes/')
const mongoose = require('mongoose')
const cors = require('cors')

// change name of the database

mongoose.connect(process.env.DATABASE, {useNewUrlParser : true})

app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(express.json())
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
    console.log('mongoose connected!')
})

app.use('/', routes)

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === 'ValidationError' && err.message.includes('email') ){
        res.status(400).json({msg : 'invalid input email'})
    }else if(err.msg){
        res.status(404).json({msg : err.msg })
    }else{
        res.status(500).json({
            msg : 'internal server error'
        })
    }
})

// module.exports = app
app.listen(port, () => console.log(`Example app listening on port port!`))
