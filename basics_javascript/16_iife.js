//immediately invoked function exprssions(iife)

// function chai(){
//     console.log(`DB connected`);
// }
// chai()

// (function chai(){
//     console.log(`DB connected`);
//  })()

((name) => {
    console.log(`DB connected to ${name}`);
})('hitesh');

//===========javascript execution and call stack=======
//context execution is differnt for different environment in javascript
//javascript is single threaded language.

//execution context are of three types-----
//1. global execution context
//2. function execution context

//3. eval execution context

//javascript is executed in two phase 
//first one is memory phase and second one is execution phase
