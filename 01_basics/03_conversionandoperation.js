//************CONVERSIONS***********

let score = null

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);//NaN means (Not an Number).

//"33" => 33
//"33abs" => NaN
//true => 1
//false => 0

let isLoggedIn = 1

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);


//***************OPERATIONS****************
 
let value = 3
let negvalue = -value
console.log(negvalue);

/* => MEANS RAISE TO THE POWER */

let str1 = "hello"
let str2 = " Sankalpa"

let str3 = str1 + str2
console.log(str3);

//Joh pehela aayega (like string or integer) wahi baki saare part ka bhi same ho jayega.
console.log("1"+ 2 + 2);
console.log(1 + 2 + "3");

//Don't use this type of operation done below
console.log(+true);//yeh one dega kyun ki increment operator use hua toh pehele boolean integer me convert hoga phir increment/decrement use hoga.










