// there are 7 primitive datatypes in JasvaScript
// nn bb ss u
let a = null;                      // null
let b = 34;                        // number
let c = true;                      // boolian 
let d = BigInt('394594')           // big int
let e = "Ayush"                    // string
let f = Symbol("This is a symbol") // symbol
let g                              // undefined
console.log(a, b, d, e, f, g)
console.log(typeof g)

// non primitive datatype
// Objects in JS
// key value pairs and,
// used to make mappings
// same as python dictionary

const item = {
    "Ayush" : true,
    "shubh" : false,
    "lovish" : 67,
    "Rohan" : undefined
}
console.log(item["Rohan"])