const marvelHeroes = ["Thor","Spiderman","Ironman"]
const dcheroes = ["Supeman","flash","batman"]

marvelHeroes.push(dcheroes)//IT WILL GIVE ARRAYS OF ARRAY

// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]);

// const allheroes = marvelHeroes.concat(dcheroes)//IT WILL GIVE SAME AS PUSH METHOD
// console.log(allheroes);

//SPREAD OPERATOR
const all_new_heroes = [...marvelHeroes, ...dcheroes]
console.log(all_new_heroes);

const another_array = [1,2,3.,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

//IMP METHOD
console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name: "Hitesh"}));//Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
