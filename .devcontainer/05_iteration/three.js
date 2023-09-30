//for of 

//work on both array and object
//[""," "," "] or [{},{},{}]
const arr = [1,2,3,4,7];
for (const num of arr) {
    // console.log(num);
}
const greetings = "auyhs kumar maddy"
for (const greet of greetings) {
    // console.log(`for each itr ${greet}`);
}

//maps
 const map = new Map()
 map.set('IN',"India")
 map.set('USA',"United State America")
 map.set('Fr',"France");

//  console.log(map);

//using for of loop
for (const [key,val] of map) {
    //console.log(key,"::->",val );
}

//for object using for of loop

const myObject = {
    game1 : 'nfs',
    game2 : 'spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key,":-",value);
// }  //TypeError: myObject is not iterable
