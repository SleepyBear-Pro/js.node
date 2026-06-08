class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username : ${this.username}`);
    }

    static createId () {
        return `123`
    }
}

const hitesh = new User("Hitesh")
//console.log(hitesh.createId());

class Teacher extends User {
    constructor(email, username) {
        super(username)
        this.email = email
    }
}


const iphone = new Teacher("Sleepy", "sleepy@iphone.com")
iphone.logMe()
console.log(iphone.createId());



