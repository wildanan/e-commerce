const jwt = require('jsonwebtoken')
const User = require('../Models/userModel')

module.exports = {
    Authentication(req, res, next){
        let theToken = req.headers.token
        if(!theToken){
            throw ({code : 401 , msg : 'you have to login first'})
        }else{
            console.log('apahah diatas try')
            try {
                console.log('apakah didalam try')
                let decode = jwt.verify(theToken, process.env.JWT_SECRET)
                // req.decode = decode
                console.log(decode, 'ini decode')
                User.findOne({
                    email : decode.email
                })
                .then(found => {
                    console.log('ketemu nih akhirnya orangnya', found)
                    if(found){
                        req.decode = decode
                        next()
                    }else{
                        throw ({code : 404 , msg : 'user not found'})
                    }
                })
                .catch({code : 401 , msg : 'invalid token'})
                
            }catch(err) {
                throw ({code : 401 , msg : 'invalid token'})
            }
        }
    },
    
    Authorization(req, res, next){
        //find one
        console.log('ini token', req.headers.token)
        console.log('masuk auth', req.headers.email)
        console.log('ini role', req.headers.role)
        console.log('ini email', req.headers.email)
        let userLogin = req.headers.email
        User.findOne({
            email : userLogin
        })
        .then(found => {
            if(found){
                console.log('nemu ni yg lagi login si', found.username, found.role)
                if(found.role == 'admin'){
                    next()
                }else{
                    throw({code : 401, msg : 'not authorized'})
                }
            }else{
                throw({code : 404, msg : 'user not found'})
            }
        })
        .catch(next)

    }
}