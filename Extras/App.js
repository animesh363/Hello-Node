// const CalSum = require("./sum");

const {x, CalSum} = require("./sum") // For importing multiple things

require("./index");



// var FName="Animesh ";
// var LName="Thakur";

// console.log(FName + LName);


// console.log(global); // clearInterval, clearTimeout, setInterval, setTimeout

// console.log(this); // it will print an empty object not (global object)

// console.log(globalThis); //standard way to access the global object


var a=10;
var b=20;
CalSum(a,b)

console.log(x);

console.log(globalThis===global); //true

