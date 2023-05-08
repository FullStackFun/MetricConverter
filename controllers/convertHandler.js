function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    let Regex = /[^a-z]+|[a-z]+/gi

    result = input.match(Regex)[0]
    let number = /\d/

    if(number.test(result) == false) {
      //console.log("return 1")
      return 1;
    }

    if (result.toString().includes('/')) {
        let pieces= result.toString().split('/')
        if (pieces.length !=2) {
          return 'invalid number'
        }
        pieces[0] = parseFloat(pieces[0])
        pieces[1] = parseFloat(pieces[1])
        result = parseFloat((pieces[0]/pieces[1]).toFixed(5))
    }

    if(isNaN(result)) {
      return 'invalid number'
    }

    result = parseFloat(result)
    
    return result
  };
  
  this.getUnit = function(input) {
    let result;
    let Regex = /[^a-z]+|[a-z]+/gi

    result = input.match(Regex)[1]

    if(!result) {
      result = input.match(Regex)[0]

    }

    let validity = ['l', 'gal', 'lbs', 'mi', 'km', 'L', 'GAL', 'LBS', 'MI', 'KM', 'kg', 'KG']
    if (validity.includes(result) == false) {
     // console.log('invalid unit', 'from this.getUnit')



      result =  'invalid unit'
    }
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;

    result = initUnit;
    
    if (result === 'mi' || result === 'MI') {
      return 'km'
    }

    if (result === 'km' || result === 'KM') {
      return 'mi'
    }

    if (result === 'l' || result === 'L') {
      return 'gal'
    }
    if (result === 'gal' || result === 'GAL') {
      return 'L'
    }

    if (result === 'lbs' || result === 'LBS') {
      return 'kg'
    }
    if (result === 'kg' || result === 'KG') {
      return 'lbs'
    }

    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result

    if (initUnit === 'km' || initUnit === 'KM') {
      result = (1/miToKm * initNum).toFixed(5)
      result = parseFloat(result)
    }
    else if (initUnit === 'mi' || initUnit === 'MI') {
      result = (miToKm * initNum).toFixed(5)
      result = parseFloat(result)
    }
    else if (initUnit === 'gal' || initUnit === 'GAL') {
      result = (galToL * initNum).toFixed(5)
      result = parseFloat(result)
    }
    else if (initUnit === 'l' || initUnit === 'L') {
      result = (1/galToL * initNum).toFixed(5)
      result = parseFloat(result)
    }
    else if (initUnit === 'lbs' || initUnit === 'LBS') {
      result = (lbsToKg * initNum).toFixed(5)
      result = parseFloat(result)
    }
    else if (initUnit === 'kg' || initUnit === 'KG') {
      result = (1/lbsToKg * initNum).toFixed(5)
      result = parseFloat(result)
      
    }

  console.log(result)
  console.log(typeof result, "result type of")
  //console.log(typeof result.toFixed(5), "fixed result")

    
    return parseFloat(result)
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;

    if (initUnit === 'km' || initUnit === 'KM') {
      initUnitString = 'kilometers'
    }
    else if (initUnit === 'mi' || initUnit === 'MI') {
     initUnitString = 'miles'
    }
    else if (initUnit === 'gal' || initUnit === 'GAL') {
      initUnitString = 'gallons'
    }
    else if (initUnit === 'l' || initUnit === 'L') {
      initUnitString = 'liters'
    }
    else if (initUnit === 'lbs' || initUnit === 'LBS') {
     initUnitString = 'pounds'
    }
    else if (initUnit === 'kg' || initUnit === 'KG') {
      initUnitString = 'kilgrams'
      
    }
  
    if (returnUnit === 'km' || returnUnit === 'KM') {
      returnUnitString = 'kilometers'
    }
    else if (returnUnit === 'mi' || returnUnit === 'MI') {
     returnUnitString = 'miles'
    }
    else if (returnUnit === 'gal' || returnUnit === 'GAL') {
      returnUnitString = 'gallons'
    }
    else if (returnUnit === 'l' || returnUnit === 'L') {
      returnUnitString = 'liters'
    }
    else if (returnUnit === 'lbs' || returnUnit === 'LBS') {
     returnUnitString = 'pounds'
    }
    else if (returnUnit === 'kg' || returnUnit === 'KG') {
      returnUnitString = 'kilgrams'
      
    }

    result = initNum + " " + initUnitString + " converts to " + returnNum + " " + returnUnitString
    
    return result;
  };
  
}

module.exports = ConvertHandler;
