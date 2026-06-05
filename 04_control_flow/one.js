// if 
const users = true

const temperature = 41

if(temperature < 50) {
    console.log("less than 50");
} else {
    console.log("greater than 50");   
}

// < , > , <= , >= , == , != , === , !==
const score = 200
if(score > 100) {
    const user =  "fly"
    console.log(`User can : ${user}`);
}

// console.log(`User can : ${user}`);

const balance = 1000

if (balance < 500) {
    console.log("less than 500");
} else if(balance < 750) {
    console.log("less than 750");
} else if(balance < 900) {
    console.log("less than 900");
} else {
    console.log("Sufficient");
    
}

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false

if(userLoggedIn && debitcard) {  // AND = &&
    console.log("Verified");
    
}

if (userLoggedIn || loggedInFromGoogle) {   // OR = ||
    console.log("verified");
    
}





