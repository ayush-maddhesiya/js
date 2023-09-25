//there are two of datatype mainly


//premitive and non-premitive.

//7 type: Number,bigint,boolean,string,null , undefined,

//premitive
const id = Symbol('123')
const another = Symbol('123')

console.log(id === another);           //false.
const  bigNumber = 12312313145231n


//non pri(refence )

//object , array, funtions

//array
const heros = ["skatiman","krish","chacha chuadry","flying jut","nagraaj"]

//object
let object1 = {
    name : "ayush",
    age: 32,
    place : "indore"
}


//funtions
function greet() {
    console.log("Hello, world!");
}

const greet = function() {
    console.log("Hello, world!");
}
