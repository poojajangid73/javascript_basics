let a = 10
const b = 20
var c = 30
console.log(a) //10
console.log(b) //20
console.log(c) //30

{} //scope is represented by this symbol
// declaration inside scope is defined as block scope and outside the braces it is define as global scope
let A =300
if(true){
    let A = 10
    var B = 20
    console.log("value: ",A) //10
}
console.log(A) //300

function one(){
    const username = "pooja"
    function two(){
        const website = "youtube"
        console.log(username); //pooja
    }
    //console.log(website) //give error
    two()
}
one()
//block scope does access the value of global scopes but global scope does not

if(true){
    let username = "pooja"
    if(username == "pooja"){
        let website = " youtube "
        console.log(username + website) //pooja youtube
    }
}
//child class can access from the parent class

//function hoisting
function addOne(num){
    return num + 1
}
console.log(addOne(5)) //6 
//there is no issue even if we call the function addOne before the function declaration

const newFunction = function addTwo(num){
    return sum+2
}
console.log(addTwo(5)) //7
//here javascript does not allow us to call this function before the function declaration because we store this whole funtion in the variable newFunction

