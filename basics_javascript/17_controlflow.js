
//if statement=========
if(true){

}

//conditional operator==
// < ,> ,<= ,>= ,== ,=== ,!= ,!==

//for example
let temperature = 41
if(temperature > 40){
    console.log("temperature is less than 40") //excuted only when condition is true
}
else{
    console.log("temperature is greater than 40") //execute when above condition is false
}
console.log("excuted") //always execute

const score = 200
if(score > 100){
    const power = "fly"
    console.log(`User Power : ${power}`)
}
//var has global scope

//implicent scope======
//shorthand
const balance = 1000
if(balance>500) console.log("test");

//multiple conditions
if(balance > 700){
    console.log("greater than 700")
}
else if(balance > 500){
    console.log("greater than 500")
}
else{
    console.log("less than 500")
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggedIn && debitCard){ //both conditions must have to be true
    console.log("Allow to buy course")
}
else if(loggedInFromEmail || loggedInFromGoogle){ //either one condition must true
    console.log("user logged in")
}

//switch case=====================
//syntax for switch case-------
// switch(key){
//     case value:
//         break;
//     default:
//         break;    
// }

//example
const month = 3;
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;            
    default:
        console.log("default case match");
        break;    
}

const userEmail = [];
if(userEmail){
    console.log("email got successfully");
}
else{
    console.log("email does not found");
}

//falsy values=====
//false , 0 , -0 , 0n(bigInt) , "" , null , undefined , NaN

//truthy values====
// "0" , 'false' , " " , [] , {} , function(){} , 

 if(userEmail.length === 0){
    console.log("array is empty")
}

//false == 0  //true
//false == ''  //true
//0 == ''  //true