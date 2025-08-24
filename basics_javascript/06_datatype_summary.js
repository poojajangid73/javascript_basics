//on the basis of store and access the data ,datatypes are classified into two types:-
//first one is primitive :- (string,number,boolean,null,undefined,Symbol and bigint)
let score = 100 //number datatype
let name = "pooja" //string datatype
let isloggedIn = true //boolean datatype(true or false)
let temperature = null //null datatype
let accontCity; //undefined datatype
let unique = Symbol("2") //symbol
let bigNumber = 1334n
console.log(typeof(score)) //number
console.log(typeof(name)) //string 
console.log(typeof(isloggedIn)) //boolean
console.log(typeof(temperature)) //object
console.log(typeof(accontCity)) //undefined
console.log(typeof(unique)) //symbol
console.log(typeof(bigNumber)) //bigint

//and second one is non-primitive(reference type) :- (array,object and function)
heroes = ["shaktiman","naagraj","doga"] //array
let myObj = {
    name : "pooja",
    age : 18
}   //object
const myFunc = function(){
   console.log("hello world")
}  //function
console.log(typeof heroes) //object
console.log(typeof myObj) //object
console.log(typeof myFunc) //function(it is basically object function)
 
//datatype of null is object

