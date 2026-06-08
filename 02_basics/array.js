const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

//marvel.push(dc)
console.log(marvel);

const hero = marvel.concat(dc)
console.log(hero);
// console.log(hero[3][1]);

const heroes = [...marvel, ...dc]
console.log(heroes);

const another = [1, 2, 3,[4, 5], 4, 6, [2, 3,[4,5]]]
console.log(another);

const realanother = another.flat(Infinity);
console.log(realanother);

console.log(Array.isArray("Sleepy"))
console.log(Array.from("Sleepy"));
console.log(Array.from({ name: "Sleepy"}));  // Interesting

let score1 = 10
let score2 = 20
let score3 = 40

console.log(Array.of(score1, score2, score3));




