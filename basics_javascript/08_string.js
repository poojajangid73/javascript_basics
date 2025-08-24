let name = "pooja "
let repoCount = 50
console.log(name + repoCount + " value") //pooja 50 value
//avoid to use this type of messy syntax
console.log(`my name is ${name} and my repocount is ${repoCount}`) //my name is pooja and my repocount is 50
//above syntax is use in modern javascript

//better way to declare the string 
let myName = new String("pooja_jangid")
console.log(myName[0]) //p
console.log(myName.length) //5
console.log(myName.toUpperCase()) //POOJA
console.log(myName.toLowerCase())//pooja
console.log(myName.charAt(3)) //j
console.log(myName.indexOf('a')) //4
console.log(myName.substring(0,4)) //pooj(last index does not include)
console.log(myName.slice(0,4)) //pooj (we cam pass negative values in the parameter)

const newString = "  hitesh  "
console.log(newString) //include the space as given by the user
console.log(newString.trim())  //ignore the unnecessary spaces
console.log(newString.replace('h','H')) //Hitesh
console.log(newString.includes('e')) //true

let OurString = "hello_everyone_i_am_learning_javascript_from_chaiaurcode_youtube_channel"
console.log(OurString.split('_')) //['hello','everyone','i','am','learning','javascript','from','chaiaurcode','youtube','channel']
console.log(OurString.anchor()) //provides the link
console.log(OurString.at(0)) //h
console.log(OurString.endsWith('l')) //true
