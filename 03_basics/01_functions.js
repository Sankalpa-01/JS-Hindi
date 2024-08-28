//EXAMPLE AND PRESENTATION OF A FUNCTION.

// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }

// sayMyName()

/* ADD TWO NUMBERS USING FUNCTIONS*/
//here the value given inside the bracket is called the parameter.
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

//here the value given inside the bracket is called the argument.

addTwoNumbers(3, "4")//Both are strings
addTwoNumbers(3, 4)//Both are numbers

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    // console.log("Hitesh"); => Will not be printed    

    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log("Result : ", result);

//If we passed any value in the function then it will act as a default value and the function will never return undefined.
//LIKE THIS: function loginUserMessage(username = "SAM")

function loginUserMessage(username ){
    if(username === undefined){
        console.log("Please Enter a UserName:");
        return
    }
    return `${username} just logged in`
}

//without any things inside the bracket it will give undefined.
console.log(loginUserMessage("sankalpa"));
console.log(loginUserMessage());

// ... => This operator is called a rest operator as well as spraed operator
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject)
{
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);   
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));