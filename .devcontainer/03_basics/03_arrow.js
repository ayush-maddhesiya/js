const user = {
    username : "Ayush",
    price : 9991,

    welcomemessage : function(){
        console.log(`${this.username},you are successfully logged in Welcome`);
        console.log(this);
    }
}
//user.welcomemessage()

/* 
Ayush,you are successfully logged in Welcome
{
  username: 'Ayush',
  price: 9991,
  welcomemessage: [Function: welcomemessage]
}
 */


//user.username = "Ashish"
//user.welcomemessage()

/*
Ashish,you are successfully logged in Welcome
{
  username: 'Ashish',
  price: 9991,
  welcomemessage: [Function: welcomemessage]
}
 */


//console.log(this)     // {}  only this will be out put


// function chai() {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()   // undefined


// const chaii = function() {
//     let username = "hitesh"
//     console.log(this.username);
// }

// chaii()     //same undefined



//+++++++++++++++++++++++++++++++++++++++++++++++++Array Funtions ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const chai = () =>{
    let username = "kumar"
    console.log(this);
}
chai();   //  {}  this will be output


// const add  = ( num1,num2) =>{
//     return num1+num2;
// }


//another method to do same things

//const addnumber = (num1,num2) => ( num1+num2 )
//const addnumber = (num1,num2) =>  num1+num2 

//console.log(addnumber(22,3));


//how will you implent same for object.

const addnumber = () => ({username:"ayush"})


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()