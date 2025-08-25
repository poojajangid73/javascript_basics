//objects are declare as two types first one is literal and second one is constructor
//singleton object is created in constructor type

//============object literals===============
const unique = Symbol("mykey")
const JsUser = {
    Name : "pooja",
    [unique] : "mykey",
    Age : 18,
    Location : "jaipur",
    Email : "pooja@gmail.com"
}
console.log(JsUser.Name) //pooja
console.log(JsUser["Name"]) //pooja
console.log(typeof(JsUser.unique)) //string (so we have to bound unique in brackets in jSUser)

//Object.freeze(JsUser) //any change will not propogate after freeze the object
JsUser.email = "gagan@gmail.com" 
console.log(JsUser.Email) //pooja@gmail.com

JsUser.greetingOne = function(){
    console.log("hello everyone")
}
console.log(JsUser.greetingOne()) //[hello everyone

JsUser.greetingTwo = function(){
    console.log("hello everyone")
}

JsUser.greetingTwo = function(){
    console.log(`hello everyone ,my name is ${this.Name}`)
}
console.log(JsUser.greetingTwo()) //hello everyone,my name is pooja

//===========object constructor=============
const tinder = new Object()
tinder.id= "abc123"
tinder.name = "Sam"
tinder.isLoggedIn = false
console.log(tinder) //{ id: 'abc123', name: 'Sam', isLoggedIn: false }

const regularUser = {
    email : "pooja@gmail.com",
    full_name : {
        user_full_name : {
            first_name : "pooja",
            last_name : "jangid"
        }
    }
}
console.log(regularUser.full_name.user_full_name.last_name) //jangid

const Obj1 = {1:"a",2:"b"}
const Obj2 = {3:"c",4:"d"}
const Obj3 = {Obj1 , Obj2}
console.log(Obj3) //{ Obj1: { '1': 'a', '2': 'b' }, Obj2: { '3': 'c', '4': 'd' } }
const obj4 = Object.assign(Obj1,Obj2)
console.log(obj4) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }}
const Obj5 = {...Obj1,...Obj2}
console.log(Obj5) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const myArr= [
    {
        id : "123",
        name : "A"
    },
    {
        id : "456",
        name : "B"
    },
    {
        id : "789",
        name : "C"
    }
]
console.log(myArr[1].name) // B
console.log(tinder) //{ id: 'abc123', name: 'Sam', isLoggedIn: false }
console.log(Object.keys(tinder)) //[ 'id', 'name', 'isLoggedIn' ] .....array type
console.log(Object.entries(tinder)) //[ [ 'id', 'abc123' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ]

console.log(tinder.hasOwnProperty('Name')) //false