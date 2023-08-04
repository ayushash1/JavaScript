// Q01 : create a variable of type string and try to add a number to it

let a = "Ayush"
let b = 6
console.log(a+b)

// Q02 : check type of previous question

console.log(typeof (a+b))

// Q03 : create a const object in javascrip can you change it to hold a number?

const obj = {
    name :  "Ayush",
    section : 1,
    isPrincipal : false,

}
// const obj = 2 // this will throw error
//ans = no 

// Q04 : try to add new key to previous object

obj["friend"] = "no one"
console.log(obj)

// Q05 creat a word meaning dict

const dict = {
    appreciate : "to enjoy something or to understand the value of somebody/something",
    latent : "existing, but not yet very noticeable, active or well developed",
    deviate : "to change or become different from what is normal or expected",
    holocaust : "a situation where a great many things are destroyed and a great many people die",
    yakka : "work specialy hard work"
}

console.log(dict.yakka)