const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
    test('convert 1L (valid input)', function(done) {

        chai.request(server)
            .get('/api/convert')
            .query({input:'1L'})
            .end(function(error, response) {
                assert.equal(response.status, 200)
                assert.equal(response.body.initNum, 1)
                assert.equal(response.body.initUnit, 'L')
                assert.approximately(response.body.returnNum, .264172, 0.5)
                assert.equal(response.body.returnUnit, 'gal')
                done()
            })
    })

    test('convert 3/7.2/kg (invalid input)', function(done) {

        chai.request(server)
            .get('/api/convert')
            .query({input:'3/7.2/kg'})
            .end(function(error, response) {
                assert.equal(response.body, 'invalid number')
                done()
            })
    })


 test('convert 3g (invalid unit)', function(done) {

        chai.request(server)
            .get('/api/convert')
            .query({input:'3g'})
            .end(function(error, response) {
                assert.equal(response.body, 'invalid unit')
                done()
            })
    })

    test('convert 3/7.2/kig (invalid unit and number)', function(done) {

        chai.request(server)
            .get('/api/convert')
            .query({input:'3/7.2/kig'})
            .end(function(error, response) {
                assert.equal(response.body, 'invalid number and unit')
                done()
            })
    })

    test('convert kg (no number input defaults to input of 1))', function(done) {

        chai.request(server)
            .get('/api/convert')
            .query({input:'kg'})
            .end(function(error, response) {
                assert.equal(response.body.initNum, 1)
                assert.equal(response.body.initUnit, 'kg')


                done()
            })
    })

    


});

