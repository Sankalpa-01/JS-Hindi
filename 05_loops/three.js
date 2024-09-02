//                                               for of loop

// ["", "", ""] => array of string
// [{}, {}, {}] => array of objects

// const arr = [1,2,3,4,5]

// for(const num of arr){
//     console.log(num);
// }

const greetings = "Hello World!"
for(const greet of greetings)
{
    console.log(`Each char is ${greet}`);
}

//                                                       MAPS
//Does not contain any duplicate element 
const map = new Map()
map.set('IN', "India")
map.set('UN',"Usa")
map.set('FR', "France")

console.log(map);

for(const [key,value] of map)
{
    console.log(key, ':-', value);
}

const myObject = {
    'game1' : NFS,
    'game2' : GTA
}

// for (const [key,value] of myObject) {
//     console.log(key, ':-', value);
// }



