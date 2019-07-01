const chai = require('chai')
const chaiHttp = require('chai-http')

const app = require('../app.js')

chai.use(chaiHttp)

const expect = chai.expect

// del del

describe('loginUser', function(){
    describe('POST/user/signin', function(){
        it('should send an object with 200 status code', function(done){
            chai.request(app).post('/user/signin')
            .send({username: 'wildan', email: 'wildan@mail.com', password: 'qwqw' })
            .then(function(res){
                expect(res).to.have.status(200)
                expect(res.body).to.be.an('Object')
                // expect(res.body).to.have.property('_id')
                // expect(res.body).to.have.property('username')
                expect(res.body.payload).to.have.property('email')
                // expect(res.body.payload).to.have.property('password')
                expect(res.body.payload.email).to.equal('wildan@mail.com')
                // expect(res.body.payload.password).not.to.equal('1212')
                // expect(res.headers.token).to.have.property('token')
                done()
            })
        })
    })
    describe('POST/user/signin', function(){
        it('should send an object with 404 status error code', function(done){
            chai.request(app).post('/user/signin')
            .send({username: 'wildan', email: 'wildan', password: 'wrong' })
            .then(function(res){
                expect(res).to.have.status(404)
                expect(res.body).to.be.an('object')
                // expect(res.body).to.have.property('_id')
                // expect(res.body).to.have.property('email')
                // expect(res.body).to.have.property('password')
                // expect(res.body.email).to.have.equal('wildan@mail.com')
                // expect(res.body.password).to.have.equal('qwqw')
                expect(res.body.msg).to.equal('wrong input email or password')
                done()
            })
        })
    })
    describe('POST/user/signin', function(){
        it('should send an object with 400 status error code', function(done){
            chai.request(app).post('/user/signin')
            .send({username: 'wildan', email: 'wildan@mail.com', password: 'wrong' })
            .then(function(res){
                expect(res).to.have.status(404)
                expect(res.body).to.be.an('object')
                // expect(res.body).to.have.property('_id')
                // expect(res.body).to.have.property('email')
                // expect(res.body).to.have.property('password')
                // expect(res.body.email).to.have.equal('wildan@mail.com')
                // expect(res.body.password).to.have.equal('qwqw')
                expect(res.body.msg).to.equal('wrong input email or password')
                done()
            })
        })
    })
    // describe('POST/user/signin', function(){
    //     it('should send an object with 500 status error code', function(done){
    //         chai.request(app).post('/user/signin')
    //         .send({ email: 'wildan@mail.com', password: 'qwqw' })
    //         .then(function(res){
    //             expect(res).to.have.status(500)
    //             expect(res.body).to.be.an('object')
    //             // expect(res.body).to.have.property('_id')
    //             // expect(res.body).to.have.property('email')
    //             // expect(res.body).to.have.property('password')
    //             // expect(res.body.email).to.have.equal('wildan@mail.com')
    //             // expect(res.body.password).to.have.equal('qwqw')
    //             expect(res.body.message).to.have.equal('internal server eror')
    //             done()
    //         })
    //     })
    // })
    describe('POST/user/signin', function(){
        it('should send an object with 400 status error code', function(done){
            chai.request(app).post('/user/signin')
            .send({ email: ' ', password: 'qwqw' })
            .then(function(res){
                expect(res).to.have.status(400)
                expect(res.body).to.be.an('object')
                // expect(res.body).to.have.property('_id')
                // expect(res.body).to.have.property('email')
                // expect(res.body).to.have.property('password')
                // expect(res.body.email).to.have.equal('wildan@mail.com')
                // expect(res.body.password).to.have.equal('qwqw')
                expect(res.body.msg).to.equal('wrong input email or password')
                done()
            })
        })
    })
    describe('POST/user/signin', function(){
        it('should send an object with 404 status error code', function(done){
            chai.request(app).post('/user/signin')
            .send({ email: 'wildan ', password: 'qwqw' })
            .then(function(res){
                expect(res).to.have.status(404)
                expect(res.body).to.be.an('object')
                // expect(res.body).to.have.property('_id')
                // expect(res.body).to.have.property('email')
                // expect(res.body).to.have.property('password')
                // expect(res.body.email).to.have.equal('wildan@mail.com')
                // expect(res.body.password).to.have.equal('qwqw')
                expect(res.body.msg).to.equal('wrong input email or password')
                done()
            })
        })
    })
})