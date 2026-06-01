// Primitive

// 7 Types :
// String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt

// Reference (Non Primitive)

// Arrays

const heros = ["Shaktiman", "Naagraj", "Doga"]

// Objects

let myObj = {
    name : "Ojas",
    age : 22,
}

// Functions

const myFunction = function(){
    console.log("Hello world");
    
}


// *************************** Memory ***************************************

// Stack (Primitive) , Heap (Non Primitive)

let myNickName = "Slepy"
let anotherName = myNickName
anotherName = "SleppyBear"

console.log(myNickName);
console.log(anotherName);

let userOne = {
    email : "ojas@google",
    upi : "ybl@ojas",
}

let userTwo = userOne

userTwo.email = "Sleepy@google"

console.log(userOne);
console.log(userTwo);

