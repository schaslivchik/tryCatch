'use strict'

function pow(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * pow(base, exponent - 1);
}
console.log("pow(2,3) :>> ", pow(2, 3));