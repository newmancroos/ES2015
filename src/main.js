"use strict"
let theString ="Hello, myname is Newman and OI love javascript";

console.log(theString.startsWith("Hello"));  //true
console.log(theString.endsWith("love"));  //false
console.log(theString.includes("love")); //true

//Hex
console.log(0xff); //255
//Binary
console.log(0b101011); //43
//Octal
console.log(0o543); //355

console.log(Number.isFinite(123)); //true,
console.log(Number.isFinite(NaN)); //false,
console.log(Number.isNaN(NaN)) //true
console.log(Number.isInteger(23)) //true

