const user = {
    username : "Sleepy",
    loginCount : 8,
    signedIn : true,
    getUserdetails : function() {
        // console.log("Got user details from database");
        // console.log(`Username : ${this.username}`);
        // console.log(this);
        
        
    }
}
// console.log(user.username);
// console.log(user.getUserdetails());
// console.log(this);

//const promise = new Promise()
//const date = new Date()

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}

const userOne = new User("Sleepy", 12, true)
const userTwo = new User("Bear", 11, false)
console.log(userOne.constructor);
console.log(userTwo);





