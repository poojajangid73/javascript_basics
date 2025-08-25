//javascript array are resizable and contain a mis of differnt datatypes
const myArr = [1,2,3,4,5,6]
let newArr = new Array(1,2,3,4,5)
console.log(myArr[1]) //2 (way to accessing the element)
console.log(newArr.length) //5
myArr.push(7) //add on an element 
myArr.push(8)
myArr.push(9)
console.log(myArr)  //[1,2,3,4,5,6,7,8,9]
myArr.pop() //remove an element from the last of array
console.log(myArr) //[1,2,3,4,5,6,7,8]

myArr.unshift(9) //add the element in from from the front 
console.log(myArr) //[9,1,2,3,4,5,6,7,8]
myArr.shift()  //remove the elemnt from the front of the array
console.log(myArr) //[1,2,3,4,5,6,7,8] 

const newArray = newArr.join() //.join add all the elment to the string
console.log(newArray) //1,2,3,4,5 (datatype converts to string)
console.log(newArr) //[1,2,3,4,5]

const arr = [1,2,3,4,5]
const myn1 = arr.slice(1,4) //last index does not include
console.log(myn1) //[2,3,4]
console.log(arr) //[ 1, 2, 3, 4, 5 ] 
//there is no any change in original array

const myn2 = arr.splice(1,4) //last index is also include
console.log(myn2) //[2,3,4,5]
console.log(arr) //[1] 
//there is change in original array,the spliced part is removed in original array


const marvel_heroes = ["thor","ironman","spiderman"]
const dc_heroes = ["superman" ,"flash","batman"]
marvel_heroes.push(dc_heroes)
console.log(marvel_heroes) //["thor","ironman","spiderman",["superman","flash","batman"]]

const heroes = marvel_heroes.concat(dc_heroes)
console.log(marvel_heroes) //["thor","ironman","spiderman",["superman","flash","batman"]]
console.log(heroes) //["thor","ironman","spiderman",["superman" ,"flash","batman"],"superman","flash","batman"]

const all_heroes = [...marvel_heroes,...dc_heroes] //spread all the elements
console.log(all_heroes) //["thor","ironman","spiderman",["superman" ,"flash","batman"],"superman","flash","batman"]

const another_array = [1,2,[3,4],5,[6,7,[8,9]],10]
let real_array = another_array.flat(Infinity)
console.log(real_array) //[1,2,3,4,5,6,7,8,9,10]

console.log(Array.isArray("pooja")) //false
console.log(Array.isArray([1,2,3,4])) //true
console.log(Array.from("pooja")) //converts into the array //['p','o','o','j','a']
console.log(Array.from({name : "pooja"})) //[] ,because ith does not able to convert it to array we have to give base point 

//converting various variables into the array
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)) //[100,200,300]

const array = [1,2,3,4,5]
console.log(array.reverse()) //[5,4,3,2,1]
console.log(array.includes(3)) //true