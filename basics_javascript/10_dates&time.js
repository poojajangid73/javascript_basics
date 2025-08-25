//============DATE============== :-

//date object incapsulate an integral number that represents the miliseconds since the midnight at the beginning of 1 january 1970.
let myDate = new Date()
console.log(myDate) //2025-08-25T09:58:23.531Z (may vary)
console.log(myDate.toDateString()) //Mon Aug 25 2025
console.log(myDate.toString()) //Mon Aug 25 2025 15:32:06 GMT+0530 (India Standard Time)
console.log(myDate.toISOString()) //2025-08-25T10:02:06.155Z
console.log(myDate.toJSON()) //2025-08-25T10:02:06.155Z
console.log(myDate.toLocaleDateString()) //25/8/2025
console.log(myDate.toLocaleString()) //25/8/2025, 3:32:06 pm
console.log(myDate.toLocaleTimeString()) //3:32:06 pm
console.log(myDate.toTimeString()) //15:32:06 GMT+0530 (India Standard Time)
console.log(myDate.toUTCString()) //Mon, 25 Aug 2025 10:02:06 GMT
console.log(typeof(myDate)) //object
 
let createDate = new Date(2025,0,15)
console.log(createDate.toDateString()) //Wed Jan 15 2025
//months are started from 0 in js(0-11)
//in the case of YY-DD-MM or MM-DD-YY,months start from 1.
let newDate = new Date("11-25-2025")
let myTimeStamp = Date.now()
console.log(myTimeStamp) //1756117095121(a value milisecond from 1 jan 1970)
console.log(newDate.getTime()) //a milisecond value

//when we want the time in seconds :-
console.log(Date.now()/1000) //but this value comes in decision 
console.log(Math.floor(Date.now()/1000))

let new_date = new Date()
console.log(new_date.getMonth()) //7
console.log(new_date.getDay()) //1
console.log(new_date.getHours()) //15
//above outputs are not fixed

//we can customize the properties in locale string as :-
console.log(myDate.toLocaleString('Default',{
    weekday : "long",

})) //Monday

