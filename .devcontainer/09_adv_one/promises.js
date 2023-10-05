// const promiseOne = new Promise(function(resolve,reject){
//     //something 
//     //something

//     setTimeout(() => {
//         console.log("Async task is not complete, just kidding :)");
//         resolve();
//     }, 1000);
// })

// promiseOne.then( () => {
//     console.log('promise consumed.');
// })


// new Promise( function (resolve,reject) {
//     //some
//     //...things
//     console.log('Async 2 task completed . ');
//     resolve();
// }).then( ()=>{
//     console.log("Async 2 is consumed");
// })


// const promiseThree = new Promise( (resolve,reject)=>{
//     setTimeout(() => {
//         console.log('Async 3 just nothing,,..');
//         resolve({user : 'coolDude69', email : 'fuckboy@svvv.in'})
//     }, 1000);
// })

// promiseThree.then( (user) => {
//     console.log(user);
// })

const promiseFour = new Promise(function (resolve,reject){
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username : 'Hitesh ',email : 'ayush@ms.com',password :'Ayush@123'});
        }
        else{
            reject('ERROR : 404 not found. ');
        }
    },1000)
})

 promiseFour.then( (user) => {
    console.log(user);
    return user.username;
    // return user.username;
}).then( (username) => {
    console.log(username);
}).catch( function(error){
    console.log(error);
}).finally( ()=>{
    console.log("Either proisme mde or in it not maded");
})


const proismeFive = new Promise( function (resolve,reject){
    setTimeout( function () {
        let error = true;
        if(!error){
            resolve({username : 'JAvaSrcit', passcode : '123'});
        }
        else{
            reject('Error : JS went wrong');
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const responce = await proismeFive
    console.log(responce);
    } catch (error) {
        console.log(error)
    }
}