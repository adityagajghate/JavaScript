//array

const arr=[1,2,3,4,5,"string",true,null,undefined];
// console.log(arr) //[ 1, 2, 3, 4, 5, 'string', true, null, undefined ]
// console.log(arr.length) //9
// console.log(arr[0]) //1
// console.log(arr[3]) //4
// console.log(arr[arr.length-1]) //undefined

//zero base indexing 
// array makes shalow copy not deep copy change in one change in another
//deep copy make different copy in heap memory

// const arr2=[...arr] //spread operator
// arr2[0]=100
// console.log(arr) //[ 1, 2, 3, 4, 5, 'string', true, null, undefined ]
// console.log(arr2) //[ 100, 2, 3, 4, 5, 'string', true, null, undefined ]
const arr2=arr
arr2[0]=100
// console.log(arr) //[ 100, 2, 3, 4, 5, 'string', true, null, undefined ]
// console.log(arr2) //[ 100, 2, 3, 4, 5, 'string', true, null, undefined ]



//Array nethods 

const myarray=[1,2,3,4]
console.log(myarray)

myarray.push(5)  //push ading 
myarray.push(6)
console.log(myarray)

myarray.pop() //remove last value
console.log(myarray)

myarray.unshift(0) //add value in start by shifting all elements
console.log(myarray)
myarray.shift()  //rempve 1 st value
console.log(myarray)

// myarray.shift()  //rempve 1 st value
// console.log(myarray)

console.log(myarray.includes(9)) //check num and ans in boolean value 
console.log(myarray.indexOf(5))  //gives index of element


const newArray =myarray.join() //conert in string type
console.log(myarray)
console.log(newArray)

// slice ,splice 