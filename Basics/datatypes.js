// datatypes

// primitive
// 7 types > int, string, boolean, null undefined, symbol,bigInt

// Reference (Non primitive)

// Array, Objects, Functions


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false
// const bigNumber = 3456543576654356754n

//non-primitive

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = { //reutrn object type
    name: "hitesh",
    age: 22,
}

const myFunction = function(){ //return function , objec function
    console.log("Hello world");
}

console.log(typeof anotherId);


//Memory

//Stack - > primitive me use hota h , copy milti h
//Heap -> non-primitive me use hota h , reference milta h original ka