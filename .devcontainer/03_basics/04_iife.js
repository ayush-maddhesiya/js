
//Immeediately invoked Funtions Expressions

(function chai(){
    //named IIFE
    console.log(`DB connected`);
})();

((name)=>{
    console.log(`DB connected two ${name}`);
})('ayushkumar')


