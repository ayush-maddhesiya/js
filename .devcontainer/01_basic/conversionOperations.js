let score = "33" //this is string

console.log(typeof score);
console.log(typeof(score));

let valueinInterger = Number(score);  //converstions has been made, to convert string to number.

console.log(typeof valueinInterger);

//what if string also contain a char in it .
//like this 
let a = "33aa"

let new_a = Number(a);
console.log(typeof new_a);   //this will tell us number , this will not give us error.
console.log(new_a);  //this show what show "NaN" which means Not a number.

//two more cases of "null" and "undefined".

//for null 
let zero = null
let new_zero = Number(zero);

console.log(typeof new_zero); //this will give number
console.log(new_zero); // this will show  0

//for undifende

let un  = undefined;

let new_un = Number(un);
console.log(typeof new_un);
console.log(new_un); //this will remain NaN.

//same for boolean and 


//summary

//"33" => 33.
//"33abc" => NaN;
//ture = 1; false => 0 and vise versa is alsso true.
//"" = > false;
//"auysh" => true;


let isLogged = 1;
let nnn = Boolean(isLogged)

console.log(nnn); // answer is "true" 



//optrations in  this.
//let num = 3;
let negtivenum = -num;
console.log(negtivenum) ;   //output will be -3.
