//immediately invoked function exprssions(iife)

// function chai(){
//     console.log(`DB connected`);
// }
// chai()

// (function chai(){
//     console.log(`DB connected`);
//  })()

((name) => {
    consol.log(`DB connected to ${name}`);
})('hitesh');