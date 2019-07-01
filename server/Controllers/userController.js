const User = require('../Models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {comparePassword, generateJWT} = require('../Helpers/crypt')

class UserController{
    static create(req, res, next){
        console.log('apa masuk sini?')
        let {username, password, email} = req.body
        let obj = new User({username, password, email, role : 'customer'})
        obj.save()
        .then(created => {
            console.log('ke save!')
            res.status(201).json(created)
        })
        .catch(next)
    }
    static login(req, res, next){
        User.findOne({email : req.body.email})
        .then(found => {
            console.log( found,'ketemu 1')
            if(found){
                console.log(found, 'ini found')
                let check = comparePassword(req.body.password, found.password)
                console.log(check, 'apa ni nilainya')
                if(check){
                    console.log('generate payload')
                    let payload = {
                        username : found.username,
                        email : found.email,
                        id : found.id,
                        role : found.role
                    }
                    let token = generateJWT(payload)
                    res.status(200).json({token, payload})
                }else{
                    throw {msg : 'wrong input email or password'}
                }
            }else{
                console.log('else luar')
                throw {status : 400, msg : 'wrong input email or password'}
            }
        })
        .catch(next)
    }
}

module.exports = UserController