const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Sleepy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email:"some@gamil.com",
    fullname : {
        userfullname: {
            firstname: "Ojas",
            lastname: "Rane"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = { obj1 , obj2}
const obj4 = Object.assign({}, obj1,obj2)
//console.log(obj3);
//console.log(obj4);

const obj5 = {...obj1, ...obj2}
console.log(obj5);

const users = [
    {
        id: 1,
        name: "Ojas"
    },
    {

    }
]

console.log(users[1].name);

console.log(Object.keys(tinderUser));    //  Important
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('name'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Ojas"
}

const {courseInstructor: instructor} = course
console.log(instructor);
// JSON Format
// {
//     name: "Ojas",
//     coursesname: "free"
// }



