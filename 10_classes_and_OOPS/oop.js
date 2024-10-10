//OBJECT LITERALS
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: "true",

    getUserDetails: function(){
        //console.log("got user details from DataBase");
        //console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
//console.log(user.getUserDetails());


// CONSTRUCTOR
function User(username, loginCount, isLoggedIn)
{
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this //By default return hota hi hai toh yeh likho ya na likho farak nahi padta
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("chai aur code", 11, false) // This will overwrite the output that's why we use new keyword
console.log(userOne);
console.log(userTwo);

// new keyword kya kya karwata hai
// 1. New object is created
// 2. Constructor function is called
// 3. arguments wagera this keyword me inject ho jate hai
// 4. Output mil jata hai

// HW :- instanceof ek baar padho google se