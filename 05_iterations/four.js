// for in Loop

// const myObject = {
//     js : "javascript",
//     cpp : "C++",
//     rb : "rubby",
//     swift : "swift by apple"
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
    
// }

const programming = ["Js", "rb", "Py", "java", "cpp"]

for (const key in programming) {
   console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('fr', "France")
map.set('IN', "INDIA")

for (const key in map) {
    console.log(key);
}
