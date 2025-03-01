// object creation 

const JSuser={
    name:"Mohd Anas",
    email:"anas@gmail.com",
    age:19,
    location:"Aligarh ",
    isLoggedin:false,
    lastlogindays:['Monday','Saturday']


}
// JSuser.email="anas2@gmail.com"
// console.log(JSuser.name)
// console.log(JSuser.email)
// console.log(typeof JSuser["location"])



// for fixing the object we use 

// Object.freeze(JSuser)
// JSuser.email="anas2@gmail.com"
// console.log(JSuser);

JSuser.greeting=function(a,b){
    console.log(a+b);
    
    console.log("Hello JS user");
    
}
JSuser.greeting2=function(){
    
    
    console.log(`Hello JS user ${JSuser.name}`);
    
}

console.log(JSuser.greeting2());
