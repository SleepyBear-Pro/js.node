// for of Loop

const arr = [1,2,3,4]

for (const num of arr) {
    console.log(`Value of num : ${num}`);
}

const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('fr', "France")
map.set('IN', "INDIA")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    'game1' : "NFS",
    'game2' : "Spiderman"
}

for (const [key, value] of myObject) {
    console.log(key , ':-', value);
    
}