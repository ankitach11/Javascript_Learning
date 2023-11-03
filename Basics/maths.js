const temp = 900;
// console.log('temp', typeof temp) -> number

const temp2 = new Number(40);
// console.log('temp2',typeof temp2); -> object
// console.log('temp2', temp2.toString().length);
// console.log('temp2', temp2.toFixed(2)); //40.00

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); //123.9 if tll 3 then value-> 1e+cbn

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));


console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)