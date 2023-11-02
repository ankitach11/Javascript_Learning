const me= "Ankta";
const me2 = 50;


// console.log(me + me2) // traditional method
// console.log(`Hello, my name s ${me} ,   am ${me2} years old`) // traditional method

const temp = new String('Ankta')
// console.log(temp);


const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));


const newString = gameName.substring(0, 4) // last value ss not ncluded -> 0,1,2,3
// console.log(newString); //hite

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString); //ite

const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-')); ///returns array