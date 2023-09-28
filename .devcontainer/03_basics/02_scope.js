let a  = 10
const b = 20;
var c = 30;
console.log(a);
console.log(b);
console.log(c);

if(true){
    let aa  = 10
const bb = 20;
var cc = 30;
} 

//here we access cc becoz of var , but not aa and bb.


function one(){
    const username = "youtube"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);  //this will give error
    two()
}
one()

addone(5) //here we can access the funtion
function addone(num){
    return num+1
}

addtwo(7)      //this not accesble
const addtwo = function(num){
    return num+2
}
