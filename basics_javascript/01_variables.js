const accountId = 1234445 //constant variable does not changable
let accountEmail = "raghav@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState //undefined
console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

//prefer not to use var variable because of issue in block and functional scope
//always prefer to use let variable
//if we do not store any data only define the variable then its values will be undefined