//songleton
//object.create

//object.leteral

//declar a sysmboll
const mySym = Symbol("MeraHai");

const JsUser  = {
    name: "Ayush maddheisya",
    age : 19,
    location : "Indore",
    islogged : true,
    isloggedON : [23,14,19,2],
    "full name" : "Ayush kumar maddy",
    [mySym] : "MeraHai"
}

//way to acces object frm above
// console.log(JsUser.name)
// console.log(JsUser["name"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(typeof mySym);


JsUser.age = 190
//Object.freeze(JsUser) // this will let us to dont change the value

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());