function sayMyName (){
    console.log("S");
    console.log("L");
    console.log("E");
    console.log("E");
    console.log("P");
    console.log("Y");
}

//sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){
    //let result = number1 + number2
    //return result
    return number1 + number2
}
const result = addTwoNumbers(3,4)
//console.log("Result :" , result);

function loginUsermessage(username = "Sleepy") {
    if(!username) {
        console.log("Please enter a name");
        return    
    }
    return `${username} just logged in`
}

//console.log(loginUsermessage())

function calculateCartprice(val1 , val2 , ...num1) {
    return num1
}

console.log(calculateCartprice(200,400,500,2000));

const user = {
    username : "Sleepy",
    price : 999
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleObject(user)

handleObject({
    username: "Ojas",
    price : 399
})

const myNewArray = [200, 300, 400, 100]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,600]));


