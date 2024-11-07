// all code for this lab to be completed in this file

//Current Temperature Conditional
let currentTemperature = 70;

if (currentTemperature > 32) {
    console.log("It's not freezing...yet")
} else {
    console.log("Yeah it's freezing dude")
}

//Age Comparison Conditional
let age1 = 41
let age2 = 32

// //type check for the variables
// if (typeof age1 !== "number" || typeof age2 !== "number") {
//     console.log("Wrong input. Please try again")
// }

//older
if (age1 > age2) { 
    console.log("Hey I'm older than you!")
} else if (age1 < age2) {
    //younger
    console.log("Man! You're old!")
} else if (age1 === age2) {
    //equal age
    console.log("Sweet! We're the same age")
} else {
    console.log("Dude you put in the wrong info. Try again!")
}

//isLoggedIn Conditional Challenge
let isLoggedIn = false // rep being logged in

if (isLoggedIn) {
    console.log("Welcome back!") //am logged in
} else {
    console.log("Please log in") //not logged in
}

//Luke Question about using the Or || conditional operator
isLoggedIn = true || false
console.log("true || false", isLoggedIn)

isLoggedIn = false || true
console.log("false || true", isLoggedIn)

isLoggedIn = (true || false) || (false || false)
console.log("(true || false) || (false || false)", isLoggedIn)

isLoggedIn = false || false
console.log("false || false", isLoggedIn)

if (isLoggedIn === true) {
    console.log("Welcome Back!") 
} else {
    console.log("Please log in")
}

