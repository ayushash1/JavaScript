const prompt = require('prompt-sync')();
// // Q01;
let age = prompt("what is your age");
if(age>10 && age<20){
    console.log("Your age is between ")
}
else{
    console.log("your age does not ly between 10 and 12")
}

// Q02;
let age2 = prompt("What is your age");
switch(age2){
    case 12:
        console.log("your age is 12")
    
    case 13:
        console.log("your age is 13")

    case 14:
        console.log("your age is 14")
    
    default:
        console.log("your age is not speacial")

}
