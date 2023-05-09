'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();


app.route('/api/convert').get(function (request, response) {

  let input = request.query.input;
  let initNum = convertHandler.getNum(input)
  let initUnit = convertHandler.getUnit(input)
  let returnNum = convertHandler.convert(initNum, initUnit)
  let returnUnit = convertHandler.getReturnUnit(initUnit)
  let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit)


  //console.log(input)

  if (initNum == 'invalid number' && initUnit == 'invalid unit') {
 //   console.log('api invalid double')
    response.json('invalid number and unit')
  }

  if (initUnit == 'invalid unit') {
   // console.log('api invalid unit')
    response.json(initUnit)
  }

  if (initNum == 'invalid number') {
   // console.log('api invalid number')
    response.json(initNum)
  }

 
    let responseObject = {}
    responseObject['initNum'] = initNum
    responseObject['initUnit'] = initUnit
    responseObject['returnNum'] = parseFloat(returnNum)
    responseObject['returnUnit'] = returnUnit
    responseObject['string'] = toString


    response.json(responseObject);


})



};
