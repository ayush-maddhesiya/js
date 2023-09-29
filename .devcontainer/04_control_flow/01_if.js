//if statement
// const isUserLoggedInn = true
// if(isUserLoggedInn){
//         console.log("yess you are logged in!");
// }
// if (2 == "2") {
//     console.log("Excuted");
// }
// if (2 === "2") {     //strict keyword
//     console.log("Excuted");
// }
// if (2 != 3) {
//     console.log("Excuted");
// }


//short hand notion

const balance = 1000
// if(balance > 500)  console.log("perty Richh naah");

//if , else-if , else
// if(balance > 2000){
//     console.log("greader than 2000");
// } else if(balance > 3000){
//     console.log("greader than 3000");
// }
// else if(balance > 4000){
//     console.log("greader than 4000");
// }
// else{
//     console.log("greater than 0");
// }


const UserloggeedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if( UserloggeedIn && debitCard){
    console.log("you can buy");
}
if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("you can buy");
    
}