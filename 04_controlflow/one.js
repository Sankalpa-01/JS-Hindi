//                                                              IF STATEMENT
//OPERATORS : >,<,<=,>=,==,!=,===,!==(checks the negative sign also)

// if(true){
//     //Executed
// }
// if(false)
// {
//     //Not executd
// }

//                                                                   Example 1
// const temperature = 41
// if(temperature < 50)
// {
//     console.log("less than 50.");
// }
// console.log("temp is greater than 50.");


//                                                                   Example 2
// const score = 200

// if(score > 100)
// {
//     const power = "fly"
//     console.log(`User Power: ${power}`);   
// }
// console.log(`User power: ${power}`);


//                                                             NESTED IF-ELSE CONDITION

// const balance = 1000

// if(balance < 500)
// {
//     console.log("less  than 500.");
// }
// else if(balance < 750)
// {
//     console.log("less than 750.");
// }
// else if(balance < 950)
// {
//     console.log("less than 900.");
// }
// else
// {
//     console.log("greater.");   
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false;
const loggesInFromEmail = true;

if(userLoggedIn && debitCard && 2==2)
{
    console.log("ALOOW TO BUY COURSE.");
}

if(loggedInFromGoogle || loggesInFromEmail)
{
    console.log("USER LOGGED IN.");  
}