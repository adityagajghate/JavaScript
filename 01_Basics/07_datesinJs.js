//Date

let myDate=new Date()
// console.log(myDate)
// console.log(myDate.toString)
// console.log(myDate.toDateString) //Sat Jun 08 2024
// console.log(myDate.toTimeString) // 14:19:45 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleString()) // 8/6/2024, 2:20:26 PM
// console.log(myDate.toLocaleDateString()) // 8/6/2024
// console.log(myDate.toLocaleTimeString()) // 2:20:26 PM
// console.log(myDate.getTime()) //milliseconds from 1 jan 1970 to current date
// console.log(myDate.getFullYear()) //2024
// console.log(myDate.getDay()) //0-6 (0 means sunday)
// console.log(myDate.getDate()) //1-31 (date of month)
// console.log(myDate.getHours()) //0-23
// console.log(myDate.getMinutes()) //0-59
// console.log(myDate.getSeconds()) //0-59
// console.log(myDate.getMilliseconds()) //0-999
// console.log(myDate.getTimezoneOffset()) //-330 (in minutes)
// console.log(myDate.getMonth()) //0-11 (0 means january)
// console.log(typeof myDate) //object

//timestamps
let myCreatedDate=new Date(2024,0,1,5,30,0) //year,month,date,hours,minutes,seconds
console.log(myCreatedDate.toLocaleString()) //1/1/2024, 5:30:00 AM

let myCreatedDate2=new Date(2024,0,23) //year,month,date
console.log(myCreatedDate.toLocaleString()) //1/23/2024, 12:00:00 AM

let myCreatedDate3=new Date("2023-01-14") //year,month,date
console.log(myCreatedDate3.toLocaleString())   //1/14/2023, 12:00:00 AM

let myCreatedDate4=new Date("2023-01-14") //year,month,date
console.log(myCreatedDate4.toLocaleString())  //1/14/2023, 12:00:00 AM

let myTimeStamp=new Date(0) //milliseconds from 1 jan 1970 to current date
console.log(myTimeStamp.toLocaleString())  //1/1/1970, 5:30:00 AM

let myTimeStamp2=new Date(1000*60*60*24) //milliseconds from 1 jan 1970 to current date
console.log(myTimeStamp2.toLocaleString())  //1/2/1970, 5:30:00 AM

let myTimeStamp99=Date.now() //milliseconds from 1 jan 1970 to current date
console.log(myTimeStamp99)


console.log( myCreatedDate2.getTime()) //milliseconds from 1 jan 1970 to current date

// console.log(myCreatedDate2.setFullYear(2020)) //1577836800000 (it will return timestamp after setting year)
// console.log(myCreatedDate2.setFullYear(2020).toLocaleString()) //TypeError: myCreatedDate2.setFullYear(...).toLocaleString is not a function
myCreatedDate2.setFullYear(2020)
console.log(myCreatedDate2.toLocaleString()) //1/23/2020, 12:00:00 AM

newDate.toLocaleString('default', {weekday:'long'}) //Monday
newDate.toLocaleString('default', {month:'long'}) //January