


const score = 400 // number
const score2 = new Number(500) // object

// console.log(score) // 400
// console.log(score2) // [Number: 500]
// console.log(typeof score) // number
// console.log(typeof score2) // object

// console.log(score2.toString().length) // '500'
// console.logscore.toFixed(2) // 400.00
// console.log(score2.toFixed(2).length) // '500.00'

// console.log(score2.__proto__) // all methods and properties of number object

const hund=1000000
// console.log(hund.toLocaleString());//

// console.log(hund.toLocaleString('en-IN')); // 1,00,000  (Indian numbering system)
// console.log(hund.toLocaleString('en-US')); // 100,000   (US numbering system)
// console.log(hund.toLocaleString('de-DE')); // 100.000   (German uses dot instead of comma)

const score3 = new Number(500)

//go to console and enter Number then Number. so u can able to see the fuctions related to nubers

// console.log(Number.MAX_VALUE) 
// console.log(Number.MIN_VALUE) 
// console.log(Number.MAX_SAFE_INTEGER)

//*************** Maths *************/

// console.log(Math); //
// console.log(Math.abs(-4)); //4
// console.log(Math.round(4.3)); //4
// console.log(Math.round(4.6)); //5
// console.log(Math.floor(4.9)); //4
// console.log(Math.min(4,8,5,9)); 
// console.log(Math.floor(4,8,5,9)); 

console.log(Math.random()) //0.357
console.log(Math.random()*10 + 1) //4.68 // not give zero because +1
console.log(Math.floor(Math.random()*10 + 1)) //5

const min=10
const max=20  //to get 10 < x > 20
console.log(Math.floor(Math.random()*(max - min +1))+ min)
