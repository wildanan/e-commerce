const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
    hashPassword(password){
        console.log('berati gasampe sini?')
        return bcrypt.hashSync(password, 10)
    },
    comparePassword(password, passwordDB){
        return bcrypt.compareSync(password, passwordDB)
    },
    generateJWT(payload){
        console.log(payload, process.env.JWT_SECRET, '================');
        let token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn : '1d'})
        console.log(token)
        return token
    },
    verifyJWT(token){
        return jwt.verify(token, process.env.JWT_SECRET)
    }
}