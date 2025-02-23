// dates 
const myDate =new Date();
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());// prints date as mm/dd/yyyy
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toString());
let myTimeStamp=Date.now();// this gives the milisecond from 1 jan 1970;
let myCreatedDate=new Date("2025-02-23")
console.log(myTimeStamp);
console.log(myCreatedDate);
console.log(myCreatedDate.getTime());// all these values are in miliseconds 
/*to convert it to second we should devide it to 1000*/

console.log(Math.round(myTimeStamp/1000));// this value is in seconds 






