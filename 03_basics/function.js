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

console.log(loginUsermessage())




