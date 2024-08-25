//Primitive Data-Types
/*There are 7 primitive data-types:
String,Number,Boolean,null,undefined,Symbol,BigInt*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const Outsidetemp = null
let userEmail;//It will be undefined

const  Id = Symbol('123')
const anotherId = Symbol('123')
console.log(Id === anotherId);

const bigNumber = 345667889876n

//Refernce Types(Non-Primitive)
/*Arrays,Objects,Functions*/

//Arrays
const heroes = ["shaktimaan", "naagraj", "doga"];

//Objects
let myObj = {
    name: "Sankalpa",
    age: 21,
}

//Functions
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);




//***************************************************************************************************************

//Stack(Primitive), Heap(Non-Primitive)

let myYoutubeName = "No youtube channel"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(anothername);

let userOne = {
    email: "User@google .com",
    upi: "user@ybl",
}

let userTwo = userOne
userTwo.email = "sankalpa@google.com"

console.log(userOne.email);
console.log(userTwo.email);
