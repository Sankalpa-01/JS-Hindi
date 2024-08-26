//ARRAY

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman","batman","ironman"]
 
//Getting the elements of an array
console.log(myArr[1]);

//ARRAY METHODS
myArr.push(6)
myArr.push(7);
myArr.pop();

//IT WILL SHIFT ALL THEN VALUE OF THE ARRAY BY 1 AND WILL PUSH 9 IN THE FIRST INDEX OF THE ARRAY. 
myArr.unshift(9)
myArr.shift()//It will remove the element inserted in unshift operation

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr = myArr.join()

console.log(myArr);//IT WILL PRINT ALL THE ELEMENTS OF THE ARRAY
console.log(newArr);

//**********************SLICE AND SPLICE METHODS*********************
//SLICE OPERATION WILL NOT CAUSE ANY ELEMENT TO CHANGE IN AN ARRAY.
//SPLICE OPERATION WILL DELETE THE ELEMENTS GIVEN IN THE SPLICE OPTION AND RETURN THE REST LEFT ELEMENTS.

console.log("A",myArr);

const myn1 = myArr.slice(1,3)
console.log(n=myn1);
console.log("B",myArr);


const myn2 = myArr.splice(1,3)
console.log(myn2);






