'use strict'

function pow(base, exponent) {
  
  if(typeof base !== 'number'){
    throw new TypeError('base must be number')
  }
 
  if(exponent <= 0 || base <= 0){
    throw new Error('numbers must be >= 0')
  }

  if(!Number.isInteger(exponent) || typeof exponent !== 'number'){
    throw new TypeError('exponent must be integer number')
  }
  
  if (exponent === 0) {
    return 1;
  }
  return base * pow(base, exponent - 1);
}


try {
  console.log('object :>> ', pow(-2, 2));
} catch(error){
  console.log('e :>> ', error);
}