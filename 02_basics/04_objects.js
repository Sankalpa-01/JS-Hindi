//DECLARATION OF THE OBJECT USING CONSTRUCTOR.

//const tinderUser = new Object{} : SINGLETON OBJECT
const tinderUser = {} //NON -SINGLETON OBJECT

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname: {
            firstname : "Sankalpa",
            lastname : "Panda"
        }
    }
}

//Way to print objects of objects.
console.log(regularUser.fullname.userfullname.lastname);

//COMBINING OBJECTS
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {3: "a", 4: "b"}

//const obj4 = {obj1,obj2} : IT IS USED TO MAKE OBJECT OF OBJECT

// const obj4 = Object.assign({},obj1,obj2,obj3) => THIS IS ALSO RIGHT BUT TRY THE NEXT ONE AS IT IS NEW ONE

const obj4 = {...obj1,...obj2,...obj3}//IT IS NEW ONE AND USE THIS
console.log(obj4);

const users = [
    {
        id: 1,
        email: "h@google.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


