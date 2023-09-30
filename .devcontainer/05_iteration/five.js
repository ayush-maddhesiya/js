const coding = ['js','ruby','java','python','Cpp']

// coding.forEach(function(val){
//     // console.log(val);
// })

// coding.forEach( (item)=> {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);


// coding.forEach((item,index,arrayList) => {
//     console.log(item,index,arrayList);
// })  
/* js 0 [ 'js', 'ruby', 'java', 'python', 'Cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'Cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'Cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'Cpp' ]
Cpp 4 [ 'js', 'ruby', 'java', 'python', 'Cpp' ] */

const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "js"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
    {
        languageName : "C++",
        languageFileName : "cpp"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
});