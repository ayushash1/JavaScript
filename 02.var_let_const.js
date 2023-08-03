console.log("var let and const : what is usage and differance")

// var is initial old way of declaring variavbles 
var a = 1;
// var b = "ayush";
let b = "ayush";
var c = null;
var d = undefined;

// let and const was added es6 
// var is global variable
// let is local variable
{
    // var b = 'this'
    let b = 'this is'
    console.log(b)
}
console.log(b)

// var is globally scoped while let and const are block scoped
// var can be updated and re-declared within its scope
// let can be updated but not re-declared
// const can neither be updated nor be re-declared
// var should'nt be used much in code
