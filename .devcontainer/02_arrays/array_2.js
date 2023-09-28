const marval_heros = ["Thor", "Ironman","Spiderman"]
const dc = ["Flash","Batmann","Superman"]

//marval_heros.push(dc);

const newarray = marval_heros.concat(dc)

//console.log(newarray);


//concat is use for two array only.

//while for more than two this is method.
const a2 = [1,2,3,4,5]
const a1 = [6,7,8]
const a3 = [10,11,12]

const new_all_array  = [...a1,...a2,...a3]
//new_all_array.sort();
//console.log(new_all_array);

//if there multy array in single aray.
//multi depth array.
//to single plane array.

const another_arr = [1,2,3,[4,5],6,7,[8,[9,0],11]]

const all_arr = another_arr.flat(Infinity);
console.log(all_arr);

console.log(Array.isArray([1,2,3]));
console.log(Array.from("Maddhesiya"));

let mark1 = 100
let mark2 = 200
let mark3 = 300

console.log(Array.of(mark1,mark2,mark3));