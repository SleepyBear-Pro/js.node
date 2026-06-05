const coding = ["js", "rubby", "java", "python", "cpp"]

coding.forEach( function (val) {
    console.log(val);
})

coding.forEach( (item) => {
    console.log(item);
    
})

function printme(item) {
    console.log(item);
}

coding.forEach(printme)

coding.forEach( (item,index,array) => {
    console.log(item, index, array);  
})

const myCoding = [ 
    {
        languageName : "JavaScript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})




