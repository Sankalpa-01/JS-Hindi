//String is not an array rather it is an object
const name = "Sankalpa"
const repocount = 50

//This syntax is old syntax so prefer not to use it.
// console.log(name + repocount + "Value");

//Use Backtix
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('sankalpa-hc')

console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "  sankalpa  "
console.log(newStringOne);
console.log(newStringOne.trim());//Remove the extra space  if present.

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));
console.log(url.includes('sundar'));

console.log(gameName.split('-'));




