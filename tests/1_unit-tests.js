const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

    test('should correctly read a whole number input.', function(done) {

        let input='10L'
        assert.equal(convertHandler.getNum(input), 10)
        done()

    })

    test('should correctly read a fractional input', function(done) {

        let input='3/2L'
        assert.equal(convertHandler.getNum(input), 1.5)
        done()

    })

    test('should correctly read a decimal number input', function(done) {

        let input='.10L'
        assert.equal(convertHandler.getNum(input), .10)
        done()

    })

    test('should correctly read a fractional input with a decimal', function(done) {

        let input='1/1.5L'
        assert.equal(convertHandler.getNum(input), .66667)
        done()

    })

    test('read input unit', function(done) {

        let input='10L'
        assert.equal(convertHandler.getUnit(input), 'L')
        done()

    })
/* 
    test('should correctly read each valid input unit.', function(done) {

        let input=['gal', 'lbs', 'mi', 'km', 'L', 'GAL', 'LBS', 'MI', 'KM', 'kg', 'KG']
        input.forEach(function(x) {
            assert.equal(convertHandler.getUnit(10+x), x)

        })
        done()

    })  */

    test('should correctly read each valid input unit.', function(done) {

        let input=['gal', 'lbs', 'mi', 'km', 'L', 'GAL', 'LBS', 'MI', 'kg', 'KG']
        input.forEach(function(x) {
            assert.equal(convertHandler.getUnit(10+x), x)

        })
        done()

    })

    test(' should correctly return an error for an invalid input unit.', function(done) {

        let input='10g'
        assert.equal(convertHandler.getUnit(input), 'invalid unit')
        done()

    })

    test(' should correctly default to a numerical input of 1 when no numerical input is provided.', function(done) {

        let input='kg'
        assert.equal(convertHandler.getNum(input), 1)
        assert.equal(convertHandler.getUnit(input), 'kg')

        done()

    })


    test('should correctly return an error on a double-fraction', function(done) {

        let input='1/2/3gal'
        assert.equal(convertHandler.getNum(input), 'invalid number')
        done()

    })


    test('L to gal', function(done) {

        let input=[1, 'l']
        let expected = .26417
        assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
        done()

    })

    test('gal to L', function(done) {

        let input=[1, 'gal']
        let expected = 3.7854
        assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
        done()

    })


    test('mi to km', function(done) {

        let input=[1, 'mi']
        let expected = 1.6093
        assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
        done()

    })


    test('km to mi', function(done) {

        let input=[1, 'km']
        let expected = .62137
        assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
        done()

    })

  
    test('lbs to kg', function(done) {

        let input=[1, 'lbs']
        let expected = .4523592
        assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
        done()

    })

    test('kg to lbs', function(done) {

        let input=[1, 'kg']
        let expected = 2.20462
        assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
        done()

    })

    test('km to mi', function(done) {

        let input=[1, 'km']
        let expected = .62137
        assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
        done()

    })


});