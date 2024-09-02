//IMMEDIATELY INVOKED FUCNTION EXPRESSIONS(IIFE)
//After declaring it we must end it before any other function is declared.

//NAMED IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})();
//Sometimes Global scope problems give problem so to minimise the problem IIFE is used

//SIMPLE(UN-NAMED) IIFE
//Declaration using Arrow symbol
( (name) => {
    console.log(`DB CONNECTED TWO: ${name}`);
} )('Sankalpa');

