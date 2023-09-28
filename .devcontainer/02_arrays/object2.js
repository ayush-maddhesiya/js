/*
const tinderUser = new Object()  //singleton
const userTinder = {}      //non-Singleton 
*/   //both are same but,

const tinderUser = new Object()
tinderUser.id = "abc123"
tinderUser.email ="ayush@google.com"
tinderUser.islogged  = false;

//console.log(tinderUser);

const regularUser = {
    email: "kumar@microsoft.com",
    fullname :{
        userfullname : {
            fristname :  "raj",
            lastname : "rahul",
            middlename : "akhand"

        }
    }
}

console.log(regularUser.fullname.userfullname.middlename);



//to add object 
const obj1  ={1:"a",2:"b"}
const obj2  ={3:"c",4:"d"}

//const obj3  = {obj1,obj2}    //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }


//soo
const obj3  = Object.assign(obj1,obj2)
//or 





// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]



console.log(obj3);