function saymyname () {
    console.log("a");
    console.log("y");
    console.log("u");
    console.log("s");
    console.log("h");
}

//saymyname()

function addnum(num1,num2){
    console.log(num1+num2);
    return num1+num2;
}
let result = addnum(11,58);
//console.log("result :" , result);

function islogged(username){
    if(username === undefined){
        console.log("plz enter user name ");
        return
    }
    return `${username} is loggedd  in sucessfully`;
}

//console.log(islogged("ayush"));
//console.log(islogged(""));


function calculatecartprice(num1){
    return num1;
}
//console.log(calculatecartprice(20,70,90));   //this will 20 only

const myNewArray = [200,300,400]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log((returnSecondValue(myNewArray)));