console.log("P")
console.log("O")
console.log("O")
console.log("J")
console.log("A") //instead of using this syntax we can use funstion

function myName(){
    console.log("P")
console.log("O")
console.log("O")
console.log("J")
console.log("A")
}
myName()

//function to add two numbers
function addTwoNumbers(number1,number2){
    console.log(number1+number2)
}
addTwoNumbers(4,6) //10
addTwoNumbers() //NaN
addTwoNumbers(4,"6") //46
addTwoNumbers(4,"A") //4A

function multiply(num1,num2){
    console.log(num1*num2)
}
multiply(2,4) //8
const total = multiply(2,4)
console.log("total=",total) //total= undefined(here value of total is undefined)

//to set the above erroe we have to change some conditions
function substract(num1,num2){
    // const sub = num1-num2;
    // return sub
    return num1-num2
}
const result = substract(4,2)
console.log(result) //2

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(100,200,300)) //[ 100, 200, 300 ]

function calculate(value1,value2,...num1){
    return num1
}
console.log(calculate(100,200,300,400)) //[300,400] (100 store in value1 and 200 store in value2 and all other rest values store in num1)

//accessing object parameters through function
let newUser = {
    product :"music player",
    price :"2500"
}
function detail(){
    console.log(`we purchase the ${newUser.product} in ${newUser.price} rs.`)
}
detail(newUser) //we purchase the music player in 2500 rs.