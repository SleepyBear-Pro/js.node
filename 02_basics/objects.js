// Singleton 

// Objects Literals
Object.create

const mykey = Symbol("Key1")
const JsUser = {
    name : "Ojas",
    age : 20,
    [mykey] : "myKey1",
    location : "Betul",
    email: "ojasrane@google",
    isLogged : false,
    lastLoginDay : ["Monday", "Tuesday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mykey]);

JsUser.email = "ojas@google"
//Object.freeze(JsUser)
JsUser.email = "ojasRa@google"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Sleepy");
}

JsUser.greetings = function(){
    console.log(`Hello Sleepy , ${this.name}`);
}

console.log(JsUser.greeting());

console.log(JsUser.greetings())
