const score = new Number(400);
console.log(score);   //excepted : [Number: 400]

//but if normal number declaretion is done then .
//exmple
const ss = 401;
console.log(ss); // only 401 is output.

console.log(score.toString().length);  // 3


const othernumber  = 123.1231;
console.log(othernumber.toPrecision(4));   //123.1

const hundred = 10000000000;
console.log(hundred.toLocaleString()); // in amrican 
console.log(hundred.toLocaleString("en-IN")); // in Indian 


console.log(Math.random());  // any number b/w  0 to 1

console.log((Math.random()*10) + 1);  // any number b/w  1 to 10
console.log(Math.floor(Math.random()*10) + 1);  //integer  

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  //pata nhi , yaad nhi.  
