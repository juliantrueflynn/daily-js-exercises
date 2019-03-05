/*
*=== Thursday February 14th  - Daily Programmer ===*

*[Temperature]*
You can convert from Celsius to Fahrenheit by multiplying the temperature in Celsius by `9/5` and adding `32`.
Write an algorithm that converts from Celsius to Fahrenheit

Example:
convertToF(-30) should return a value of -22
convertToF(-10) should return a value of 14
convertToF(0) should return a value of 32
convertToF(20) should return a value of 68
convertToF(30) should return a value of 86
*/

const convertToF = (celciusInput) => celciusInput * 9/5 + 32;

console.log('-22 === ', convertToF(-30));
console.log('14 === ', convertToF(-10));
console.log('32 === ', convertToF(0));
console.log('68 === ', convertToF(20));
console.log('86 === ', convertToF(30));
