const chai = require('chai')
const chaiHttp = require('chai-http')

const app = require('../app.js')

chai.use(chaiHttp)

const expect = chai.expect

// del del

describe('addItem', function(){
    describe('POST/item/addItem', function(){
        it('should send an object with status code 201', function(done){
            chai.request(app).post('/item/addItem')
            .send({itemName : 'pom Bensin', price : 2000000, stock : 3, })
            .then(function(res){
                expect(res).to.have.status(201)
                expect(res.body).to.be.an('object')
                expect(res.body).to.have.property('itemName')
                expect(res.body).to.have.property('price')
                expect(res.body).to.have.property('stock')
                expect(res.body).to.equal('pom Bensin')
                expect(res.body).to.equal(2000000)
                expect(res.body).to.equal(3)
                done()
            })
        })
    })
    describe('GET/item/showAll', function(){
        it('should send an object with status code 200', function(){
            chai.request(app).get('/item/showAll')
            .then(function(res){
                expect(res).to.have.status(200)
                expect(res.body).to.be.an('object')
                expect(res.body).to.have.property('_id')
                expect(res.body).to.be.have.property('stock')
                expect(res.body).to.be.have.property('seller')
                done()
            })
        })
    })
    describe('GET/item/getOne', function(){
        it('should send an object with status code 200', function(){
            chai.request(app).get('/item/getOne')
            .then(function(res){
                expect(res).to.have.status(200)
                expect(res.body).to.be.an('object')
                expect(res.body).to.be.have.property('userId')
                done()
            })
        })
    })
    describe('')
})
