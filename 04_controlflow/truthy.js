//FALSY VALUES : false, 0, -0, BigInt 0n, null, undefined, NaN
//TRUTHY VALUES : true, "0", 'false', " ", [], {}, function(){}(EMPTY FUNCTION),  

const userEmail = "hitesh@ai"

if(userEmail)
{
    console.log("Got user Email.");
}
else
{
    console.log("Don't have user Email.");
}

// if(userEmail.length === 0)
// {
//     console.log("Array is Empty.");
// }


const emptyObj = {}

if(Object.keys(emptyObj).length === 0)
{
    console.log("Object is Empty.");
}

//                                                NULLISH COALESCING OPERATOR(??): null undefned

let val1;
// val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);


//                                                             TERNARY OPERATORS
//condition ? true : false

//Example
const ice = 100
ice <= 80 ? console.log("less thsan 80") : console.log("more");

