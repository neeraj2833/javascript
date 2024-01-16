const accountId = 144553
let accountEmail = "neeraj@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;// javascript will treat it as undefined

//accountId = 13352 // not possible
console.log(accountId);
accountEmail = "nikku@google.com"
accountPassword = "112233"
accountCity = "Bengluru"
/*
prefer not to use var 
because of issue in block scope or functional scope
Variables declared by let are only available inside the block where they're defined. Variables declared by var are available throughout the function in which they're declared.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])