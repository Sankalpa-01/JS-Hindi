//                                                        DATES IN JS

let myDate = new Date()
console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

//It is an object.
console.log(typeof myDate);

// let myCreatedDate = new Date("2023-01-24") => YY-MM-DD
let myCreatedDate = new Date("01-04-2023") // => DD-MM--YY
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

//Converting the time into seconds.
console.log(Math.floor(Date.now()/1000));

//Basics Values to get month,year,day,etc.
let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMinutes());
console.log(newDate.getMonth());

//`${newDate.getDay()} and the line `

newDate.toLocaleString('default',{
    weekday: "long",
})


