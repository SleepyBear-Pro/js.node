const user = {
    username : "Sleepy",
    price : 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`)
        console.log(this);
        
    }


}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()

console.log(this);

function chai() {
    username: "Sleepy"
    console.log(this);  
    console.log(this.username);
    
}


const chaiii = () => {
    let username = "Sleepy"
    console.log(this);
    
}

chai()

const addTwoo = (num1 , num2) =>  (num1 + num2)

const addTwo = (num1 , num2) => ({username : "Sleepy"})

console.log(addTwo());

const array = [1,2,3,4,5,6]

array.forEach(() => (0))







