const user = {
    username: "hitesh",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username} , welcome to website`);
    }

}

// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage() => Thill change the username from Hitesh to Sam

console.log(this); // => This will denote/return empty({})


/*******************************ARROWS***********************************/
// function chai(){
//     let username2 = "hitesh"
//     console.log(this.username2); //IT WILL GIVE UNDEFINED
// }
// chai()

//IMPLEMENTATION OF ARROWS
// const chai = () => {
//     let username = "hitesh"
//     console.log(this);
// }
// chai()

//1st Way
const addTwo = (num1,num2) => {
    return num1+num2
}
console.log(addTwo(3,4));

//2nd Way
const mulTwo = (num1,num2) => num1 * num2
console.log(mulTwo(3,4));

//Returning objects
const objTwo = (num1,num2) => ({username : "hitesh"})
console.log(objTwo(3,4));

