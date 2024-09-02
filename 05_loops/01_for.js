//                                                        FOR LOOP

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element == 5)
//     {
//         console.log("5 is best number");
        
//     }
//     console.log(element);
// }

//Nested for loop(PRINT THE TABLE FROM 1 TO 10)
//(HW)


//                                                         KEYWORDS
//break and continue

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        break;//After this condition the loop will not work anymore
    }
    console.log(index);  
}