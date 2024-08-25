console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);

//Avoid these types of conversions upto undefines wala part.
//Problem creates when comparision happens between different data-types
// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);//Return false
// console.log(null == 0);//Return false
// console.log(null >= 0);//It returns true

// console.log(undefined == 0);

// === -> Strict Check : It checks values as well as data-types.
console.log("2" === 2);//Returns false as the data-types are different



