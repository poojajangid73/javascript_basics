//============numbers=============

const value = 300
console.log(value) //300 (this is not a best practice)
 
const balance = new Number(300)
console.log(balance) //300 (better way to declare the number)
console.log(balance.toString()) //number datatype changes to string and all the properties is now valid for this number
console.log(balance.toFixed(2)) //300.00
console.log(balance.toFixed(3)) //300.000

const myNum = 321.45677
console.log(myNum.toPrecision(3)) //321
console.log(myNum.toPrecision(4)) //321.5

const hundreds = 10000000
console.log(hundreds.toLocaleString()) //1,00,00,000 (convert as per the US standard)
console.log(hundreds.toLocaleString('en-IN')) //1,00,00,000(now it is converted as per the indian standard)


//==========maths===========
console.log(Math.abs(-4)) //4
console.log(Math.abs(4))  //4
console.log(Math.round(4.4)) //4
console.log(Math.round(4.6)) //5
console.log(Math.round(4.5)) //5
console.log(Math.ceil(4.5)) //5 (priortize to largest value)
console.log(Math.floor(4.5)) //4 (priortize to lowest value)
console.log(Math.max(4,5,7,4,3)) //7
console.log(Math.min(4,3,6,8,9)) //3

console.log(Math.random()) //value in between 0 nd 1
console.log(Math.random()*10) //now one decimal shifted to one right
console.log((Math.random()*10)+1) //avoid the value as 0 (value>0)
console.log(Math.floor((Math.random()*10)+1))

let max = 20
let min = 10
console.log(Math.floor(Math.random() * (max - min + 1)) + 1)