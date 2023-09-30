const myObject  = {
    js:"javascript",
    cpp:'c++',
    rb : 'ruby',
    swift : 'Swift for Apple'
}

//there we will use for in
for (const key in myObject) {
//    console.log(key);
}//this will print only key like js,cpp,rb....


//to print both key and value of object
for (const key in myObject) { 
    //console.log(`${key} Shortcut is for ${myObject[key]}`);
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"United State America")
map.set('Fr',"France");

// for (const key in map) {
//     console.log(key);
// }  this will dont show any error no output also


