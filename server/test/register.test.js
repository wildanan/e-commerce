const chai = require('chai')
const chaiHttp = require('chai-http')

const app = require('../app.js')

chai.use(chaiHttp)

const expect = chai.expect

// del del

describe('registerUser', function(){
    describe('POST/user/signup', function(){
        it('should send an object with 201 status code', function(done){
            chai.request(app).post('/user/signup')
            .send({ username : 'wildan', email: 'wildan@mail.com', password: 'qwqw' })
            .then(function(res){
                expect(res).to.have.status(201)
                expect(res.body).to.be.an('Object')
                expect(res.body).to.have.property('_id')
                expect(res.body).to.have.property('email')
                expect(res.body).to.have.property('password')
                expect(res.body.username).to.have.equal('wildan')
                expect(res.body.email).to.have.equal('wildan@mail.com')
                done()
            })
        })
    })
    describe('POST/user/signup', function(){
        it('should send an object with 400 status code', function(done){
            chai.request(app).post('/user/signup')
            .send({ username : 'wildan', email: 'wildan', password: 'wrong' })
            .then(function(res){
                expect(res).to.have.status(400)
                expect(res.body).to.be.an('Object')
                // expect(res.body).to.have.property('_id')
                expect(res.body.msg).to.equal('invalid input email')
                // expect(res.body).to.have.property('password')
                // expect(res.body.email).to.have.equal('wildan@mail.com')
                // expect(res.body.password).to.have.equal('qwqw')
                done()
            })
        })
    })
})