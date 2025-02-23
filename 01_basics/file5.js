// using math library 
// generating random value
// math.random gives value in between 0-1 always
// by multiplying by 10 we are changing value to greater than 1
// by adding min we are giving a min value 
const min=10;
const max=20;
let x=Math.floor((Math.random()*(max-min)+ min))
console.log(x);
