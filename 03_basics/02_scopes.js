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

//console.log(a);
//console.log(b);//This will show error and will not be printed

function one(){
    const username = "hitesh"

    function two()
    {
        const website = "youtube"
        console.log(username);       
    }
    //console.log(website); => will show an error
    
    two()
}

//one()

if(true){
    const username = "hitesh"
    if(username === "hitesh")
    {
        const website = "youtube"
        console.log(username + website);
    }
    //console.log(website);//FIRST ERROR
}
//console.log(username); => SECOND ERROR

// ******************************************INTERESTING***************************************

function addone(value){
    return value + 1
}
addone(5)

//HOISTING
const addtwo = function(num){
    return num + 2
}
addtwo(5)