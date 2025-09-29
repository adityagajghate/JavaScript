// Primitive 
//7 types : 
// String ,nummber,boolearn,null,undefine,symbol,Bigint

//Reference type // Non premitive

const name="aditya"           //string
const age=22                   //number
const weight=50.63            
const  bodyTemp=null          //null
const isLoggedIn=true         //boolearn
let userEmail;//undefined
const id = Symbol('123')      //symbol
const anotherId =Symbol('123')
// console.log(id===anotherId)
const bigNumber=74148569547n  //bigint


//java script dynamic typed  or staick typed language ?
//JavaScript is a dynamically typed language *****

//Array,Object

const heros=["adi","nikki","adarsh","neha"]

let myobj={
 name:"hitesh", //objects
 age:22,
}

const myFunction = function(){
    console.log("hellow world")
}

// console.log(typeof myFunction)
// console.log( myFunction())

//********* stack & Heap **************

/* The Stack Function
in stack the one block above one like a lader 
in stack if we assign 1 variable value to another 
it gives copy to another and create it in new space/location
if we chenge 2 nd 1 st not change .*/
//value change in 1 perticular varoable
// ex

let myName ="aditya_Gajghate"
let fullName=myName

fullName="Aditya_D_Gajghate"

// console.log(myName)  //"aditya_Gajghate"
// console.log(fullName) //"Aditya_D_Gajghate"

/* The Heap Function
in this if we assign 1 value to 2nd and 2nd 
change the valu then it change in both object/variable 
//both variable/object value chnage at a time in one change 
*/

//ex
let userOne ={
    email:"user@google.com",
    upi:"user@UPI"
}

let userTwo = userOne

userTwo.email="aditya@google.com"

console.log(userOne.email) //"aditya@google.com"
console.log(userTwo.email) //"aditya@google.com"

