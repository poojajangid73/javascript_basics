//this keyword is use to refer the current context
const user = {
    username : "pooja",
    price : 900,
    welcomeMessage: function(){
        console.log(`hello ${this.username}, welcome to the website`)
        console.log(this) //this pointers tells about the current context
    }
   
}
user.welcomeMessage(); 
user.username = "hitesh";
user.welcomeMessage();
//hello hitesh, welcome to the website
// {
  //username: 'hitesh',
  //price: 900,
  //welcomeMessage: [Function: welcomeMessage]
//}
console.log(this) //{}

function One(){
    console.log(this)
}
One()

function Two(){
    console.log(this.username)
}
Two() //undefined

const mine = () => {
    let username = "hitesh";
    console.log(this)
}

//const addTwo = (num1 , num2) => {
//    return num1 + num2
//} //basic arrow function(explecent return)
//const addTwo = (num1 , num2) => num1+num2 //implecent return
const addTwo = (num1 , num2) => (num1+num2) //also write as this
//const addTwo = (num1,num2) => ({username : "hitesh"}) //correct syntax to use the object
console.log(addTwo(3,4)) //7  



