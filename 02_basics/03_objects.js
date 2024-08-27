//AGAR OBJECT CONSTRUCTORS SE BANGEGA THEN SINGLETON HI BANEGA!!
//(Object.create) : Through this type of declaration singleton object is made.

//OBJECTS LITERALS

const mySum  = Symbol("key1")

const JsUser = {
    name : "Hitesh",
    "full name" : "Hitesh Choudhary", 
    [mySum] : "myKey1",
    age : 18,
    location : "Jaipur",
    email : "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(JsUser.email); Ignore this type of notation

//DO LIKE THIS
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySum]);

console.log(typeof mySum);//It will show Symbol.

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) : It will freeze the value of the object and will not respond to the changes made after it in the object.
JsUser.email = "hitesh@email.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js-User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js-User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



