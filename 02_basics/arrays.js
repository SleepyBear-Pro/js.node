// Array

const score = [0, 1, 2, 3, 4, 5]
console.log(score);

const hero = ["Sleepy", "ojas"]


const myArr = new Array(1, 2, 3, 4, 5,)
console.log(myArr);

// Array Method

myArr.push(3)
myArr.pop()

console.log(myArr);

myArr.unshift(9)
console.log(myArr);
myArr.shift()
console.log(myArr);


console.log(myArr.includes(4));
console.log(myArr.indexOf(3));

const newArr = myArr.join()

console.log(myArr);
console.log(typeof myArr);


// slice , splice

const run1 = [100, 99, 98, 97]
console.log("A ", run1);

const run2 = run1.slice(1,3)
console.log(run2);
console.log("B ", run1);

const run3 = run1.splice(1,3)
console.log(run3);
console.log("C ", run1);





















