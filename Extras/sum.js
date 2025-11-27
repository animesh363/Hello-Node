console.log("sum.js is executed, Calculating Sum..");

const x ="Hello Animesh";
function CalSum(a, b){
    const sum = a+b;
    console.log(sum);
}

// module.exports = CalSum;
module.exports = {x, CalSum} //When we have to export multiple things