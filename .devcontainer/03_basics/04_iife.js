// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')



//Immeediately invoked Funtions Expressions

(function chai(){
    //named IIFE
    console.log(`DB connected`);
})();

((name)=>{
    console.log(`DB connected two ${name}`);
})('ayushkumar')


