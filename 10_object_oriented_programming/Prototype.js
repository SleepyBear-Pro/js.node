let myName = "Sleepy     "
let mychannel = "chai     "


//console.log(myName.trueLength);

let myHero = ["Thor" , "Spiderman"]



let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function () {
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.sleepy = function() {
    console.log(`Sleepy is sleeping`);
    
}

Array.prototype.heySleepy = function() {
    console.log(`Sleepy Bear is sleeping`);
    
}

//heroPower.sleepy()
myHero.sleepy()
myHero.heySleepy()
//heroPower.heySleepy()

// Inheritance

const User = {
    name : "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "JS assignment",
    fullTime : true,
    __proto__ : TeachingSupport
}


Teacher.__proto__ = User
// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)
console.log("Ojas Rane");


let anotherUsername = "SleepyBear     "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    //console.log(`${this.name}`);
    console.log(`True Length is : ${this.trim().length}`);
}

anotherUsername.trueLength()
"Sleepy".trueLength()
"Bear".trueLength()

