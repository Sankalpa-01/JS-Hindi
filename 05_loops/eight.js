const myNums = [1,2,3]

//NORMAL IMPLEMENTATION
// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)

//ARROW FUNCTION
// const myTotal = myNums.reduce( (acc,curr) => acc+curr, 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python",
        price: 999
    },
    {
        itemName: "C++",
        price: 599
    },
]

const pricetopay = shoppingCart.reduce( (accumulator,item) => accumulator + item.price, 0)
console.log(pricetopay);
