//for loop======

for(let i = 0 ; i<=10; i++){
    //console.log(i)
}

let myArray = ["flash","superman","batsman"]
for(let i=0;i<myArray.length;i++){
    //console.log(myArray[i])
}

//break statement
for(let i=0;i<10;i++){
    //console.log(i)
    if(i==5){
        //console.log("5 is detected. leave ths loop")
        break;
    }
}

//continue statement======
for(let i=0;i<10;i++){
    //console.log(i)
    if(i==5){
        //console.log("5 is detected. leave ths loop")
        continue;
    }
}

//while loop===============
let index = 0;
while(index<5){
    //console.log(`value of index is ${index}`)
    index = index +2
}

let newArr = ["hii","hello","heyy"]
let i = 0;
while(i<newArr.length){
    //console.log(`value at index is ${myArray[i]}`)
    i++;
}

//do while loop============
//do{____
//_____
//}while()
let score = 1;
do{
    //console.log(`score is ${score}`)
    score++
}while(score<=10)

let mark = 11;
do{
    //console.log(`mark is ${mark}`)
    score++
}while(mark<=10)     //mark is 11
//in do while loop , condition is checked later 

//===========high order array loops==========(for of loop , for in loop)

//=== for of ====
//["" , "" ,"" ] (strings in array)
//[{} ,{} ,{}] (objects in array)

//syntax
//for(const iterator of objects){
//}

const arr = [1,2,3,4,5]
for(const num of arr){
    //console.log(num)
}

//for of loop on string
const name = "lokesh";
for(const char of name){
    //console.log(char)
}

//maps===========
//maps always contain unique values

const map = new Map()
map.set("In","INDIA")
map.set("USA","UNITED STATE OF AMERICA")
map.set("FR","FRANCE")
//console.log(map)
//for of loop on maps========
for(const key of map){
    //console.log(key)
}

for(const [key,value] of map){
    //console.log(key)
    //console.log(value)
}

//for of loop on objects=======
const myObject = {
    1 : "A",
    2 : "B",
    3 : "C",
    4 : "D",
    5 : "E"
}
//for(const [key,pair] of myObject){
    //console.log(key)
//} 
//threw error that myObject is not iterable
//there is other way to iterate the object in javascript

//to iterate the object we use for in loop====
const myObj = {
    js : "javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}
for(const key in myObj){
     console.log(key)
     console.log(myObj[key])
     console.log(`${key} is shortcut for ${myObj[key]}`)
}
//for in loop is also applicable on array

//===========for each loop=======
const coding = ["java" , "cpp" , "ruby" , "python" , "js" , "c"]
// coding.forEach(function(value){
//     console.log(value);
// })
// //using forEach function by arrow function
// coding.forEach((item) => {
//     console.log(item)
// })

coding.forEach((item,index,array) => {
    console.log(item,index,array)
})

const language = [
    {
        languageName : "javascript",
        shortName : "js"
    },
    {
        languageName : "python",
        shortName : "py"
    },
    {
        languageName : "c++",
        shortName : "cpp"
    },
    {
        languageName : "C",
        shortName : "C"
    }
]
language.forEach( (item) => {
   console.log(item.languageName);
   console.log(item.shortName)
})

