const name = "ayyuh"
const value = 55;

//console.log("your currunt " + name + " is " + value + " repo");          //this is not good pratice.

//nowdays we usse thiss method.
console.log(`hello my name iss ${name} and total repo is ${value}`);   //hello my name iss ayyuh and total repo is 55

const game = "ayush-kumar-maddhesiya"

console.log(game[2]); // u
console.log(game.__proto__);   //{}



console.log(game.toUpperCase());  //AYUSH-KUMAR-MADDHESIYA
console.log(game.length);  //22

console.log(game.charAt(2));     //u
console.log(game.indexOf('a'));  //0


const newString = game.substring(0,5);
console.log(newString);        //ayush

const anther = game.slice(-1,5);
console.log(anther);   // 


const newStringOne = "  kumar    "
console.log(newStringOne);
console.log(newStringOne.trim());  //this trim whitespaces and newlines.

const url = "https:/hitesh.com/hitesh%20choudharhttps:/github.com/hiteshchoudhary/js-hindi-youtube/blob/main/01_basics/05_strings.jsy"
console.log(url.replace('/', ' '))

console.log(url.includes('github'))    //ture

console.log(url.split('/'));
