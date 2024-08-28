//SCOPE DECLARATION
// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
// }

// //console.log(a); => This will also be not executes as a is declared inside loop.
// //console.log(b); => This will also be not executes as b is declared inside loop.
// console.log(c); // => But in this the statement will be executed and the value will be returned.This is the problem with the 'var'.
//                 // So don't use var.


let a = 300
if(true){
    let a = 10
    const b = 20
    console.log("INNER: ",a);
}

console.log(a);
//console.log(b);//This will show error and will not be printed

