const coding = ["java" , " python" , "ruby" , "cpp" , "c"]
const value = coding.forEach( (item) => {
    console.log(item);
    return item; //forEach does not return any value
})
console.log(value)

//in the situation of returning the value in loop or to check any condition , we will use filter property.
const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter( (num) => (num > 4))
//console.log(newNums) //[ 5, 6, 7, 8, 9, 10 ]

//console.log(myNums.filter( (num) => num > 4))
//console.log(myNums.filter( (num) =>{ num > 4})) //[]
//when we use the paranthesis in arrow function ,then we have to type the return to return any value
console.log(myNums.filter( (num) =>{ 
   return num > 4
}))

//if we want to use forEach in place of filter operation then we use it ny following way===========
const digits = []
myNums.forEach( (item) => {
    if(item > 6){
    digits.push(item);
    }
})
//console.log(digits)  //[ 7, 8, 9, 10 ]

//example=======
const books = [
    {
        title : "book one",
        name : "artificial intelligence",
        edition : 2019,
        publisher : "NK"
    },
      {
        title : "book two",
        name : "object oriented programming",
        edition : 2018,
        publisher : "NK"
    },
      {
        title : "book three",
        name : "data structure algorithm",
        edition : 2022,
        publisher : "AK"
    },
      {
        title : "book four",
        name : "technical communication",
        edition : 2024,
        publisher : "NK"
    },
    {
        title : "book five",
        name : "software engineering",
        edition : 2015,
        publisher : "AK"
    }
]
//const userBook = books.filter( (bk) => bk.publisher === "AK")
const myBook = books.filter( (obj) => {
    return obj.edition > 2020               
})
//console.log(myBook)

const collection = books.filter( (item) => {
    return item.edition > 2020 && item.publisher ==="NK"
})

const mynumer = [1,2,3,4,5,6,7]
const newnum = mynumer.map( (num) => { return num + 10})
console.log(newnum)

//chaining
const numb = mynumer
.map( (num) => num * 10)
.map( (num) => num+1)
.filter( (num) => num > 30)
console.log(numb)

//reduce operator
const total = [1,2,3,4,5]
const myTotal = total.reduce( function (accumulator,currentvalue) {
    console.log(`accumulator is ${accumulator} and currentvalue is ${currentvalue}`)
    return accumulator + currentvalue
} , 0)
console.log(myTotal) //15

const bill = [
    {
        product : "babykit",
        price : 1400
    },
     {
        product : "blanket",
        price : 1000
    },
     {
        product : "wallHanger",
        price : 500
    },
     {
        product : "fryPan",
        price : 700
    }
]
const haveToPay = bill.reduce( (accumulator,item) => accumulator+item.price, 0)
console.log(haveToPay)
