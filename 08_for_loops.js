// program to add first n natural numbers
const prompt = require('prompt-sync')();
let sum = 0
let n = prompt("Enter the value of n : ")
n = Number.parseInt(n)
for(var i=0; i<n; i++){
    sum +=(i+1)
}
console.log("Sum of first "+ n + " natural numbers is "+ sum)
console.log(i)

// // for in loop

// let obj = {
//     harry : 23,
//     shiv : 34,
//     ritik : 34,
//     madhav : 45,
//     samay : 40,
//     tanmay : 56,

// }
// for (let a in obj){
//     console.log("marks of "+a+" are " +obj[a])
// }

// // for of loop
// for (let b of "harry"){
//     console.log(b)
// }

