const name="aditya"
const age="22"

//console.log(name+age+" student") n
//above method is not good 

// console.log(`hi my name is ${name} my age is ${age}`);

//use backtics `` this this is good method
//we cam make it uppercase also and use diff methods

const gameName= new String('puBg') //string object
//string object
//string is primitive data type but string object is not primitive data type
console.log(gameName) //string object
console.log(gameName.toUpperCase()) //PUBG
console.log(gameName.toLowerCase()) //pubg
console.log(gameName.length) //4
console.log(gameName[0])//p
console.log(gameName.__proto__)//String object ke sare methods and properties
console.log(gameName.indexOf('B')) //2
console.log(gameName.slice(0,2)) //pu
console.log(gameName.slice(-1,0)) //
console.log(gameName.replace('Bg','G')) //puG
console.log(gameName.includes('u')) //true
console.log(gameName.split('')) //['p','u','B','g'] //we can use any base on element
console.log(gameName.split('B')) //['pu','g']
console.log(gameName.trim()) //puBg (removes whitespace from both ends)
console.log(gameName.charAt(2)) //B
console.log(gameName.charCodeAt(2)) //66 (ASCII value of 'B')
console.log(gameName.substring(0,2)) //pu /to store in other
console.log(gameName.slice(-2,3)) //


const newStringOne ="  Aditya gajghate "
console.log(newStringOne.trim()) //Aditya /removes space between words start and end only
