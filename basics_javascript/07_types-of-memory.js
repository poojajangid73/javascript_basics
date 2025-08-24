//stack memory is use in primitive datatypes (copy is recieved )
//heap memory is use in non primitive datatype(reference type) (reference of original value is recieved)

//example of stack memory :-
let myYoutubeName = "hitesh choudhary"
let anotherName = myYoutubeName
anotherName = "chai aur code"
console.log(myYoutubeName) //hitesh choudhary
console.log(anotherName) //chai aur code 
//there is no certain change in the original value

//example of heap memory :-
let userOne = {
    name : "pooja",
    age : 18,
    class : "btech"
}
console.log(userOne.name) //pooja
let userTwo =userOne
userTwo.name = "meenakshi"
console.log(userTwo.name) //meenaksi
console.log(userOne.name) //meenakshi