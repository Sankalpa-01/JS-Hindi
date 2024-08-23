const accountId = 14453
let accountEmail = "sankalpa@google.com"
var accountPassword = "12345"
accountCity = "Belpahar"//Don't use like this always use some data type.

//accountId = 2 //Not allowed

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Bengaluru"
let accountState;

console.log(accountId);

/* 
Prefer not to use var because of the issue in block scope and functional scope.
*/ 
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
