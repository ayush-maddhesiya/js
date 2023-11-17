const { response } = require("express");

const PromiseOne = new Promise( function(resolve,reject){
    setTimeout(() => {
        //DB call
        //sdkjfd
        console.log("Async tash is complete.");
        resolve();
    }, 1000);
})
PromiseOne.then(function () {
    console.log("Promise Consumed.");
});


new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("  A task second is completed.")
        resolve();
    },1000)
})
.then(()=>{
    console.log("   2nd consumed promises");
})


const PromiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
            resolve ({username: "Ayush@daddy",email : "coolDude@69"})
    },1000)
})

PromiseThree.then((user)=>{
    console.log(user);
})


const promisesFour = new Promise(function (resolve,reject) {
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username: "Ayush",password: "12369"})
        }
        else{
            reject('ERROR:Something went wrong')
        }
    }, 1000);
})

promisesFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=> console.log("The promise is ether  resolved or rejected"))



const promiseFive  = new Promise((resolve,reject)=>{
    setTimeout(( )=>{

    let error = false;
    if(!error){
        resolve({username:"JavaScript",password: "1234"})
    }
    else{
        reject('ERROR:JS went wrong')
    }
    },1000)
})

//by try and catch bloch both are same.

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


//this is fetch 

async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json();
        console.log(data);

    }
    catch(error){
        console.log("E: ",error);
    }
}

getAllUsers();



// second method in this is fetch.   https://github.com/users/ayush-maddhesiya    fetch('https://api.github.com/users/hiteshchoudhary')   

fetch('https://api.github.com/users/ayush-maddhesiya')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})



// promise.all  is just itratable all other promise in array
