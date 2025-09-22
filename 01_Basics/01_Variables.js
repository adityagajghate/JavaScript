console.log("JavaScrpt Variables")
//Use to print tha value
const accountId = 12345   
//we can not change the value but we can change the object key pair value 
let accountEmail ="aditya@gmail.com" 
// we can not efine again ,able to change the value 
var accountPassword ="3532" 
//its not use currently ,Because issue in block scope and functional scope 
accountCity="pune"
//not use at any condition

//trying to change value
 
/*accountId=2  .........not allowed because its const
 console.log(accountId) */

accountEmail ="gajghate@gmail.com"
accountPassword ="99999" 
accountCity="jaipur"

console.table([accountEmail,accountPassword,accountCity])


//if we not define value in LET then its Undefine
let myName;
console.log(myName)
//if we 