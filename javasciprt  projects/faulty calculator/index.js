// faulty calculator

document.body.style.backgroundColor = "gray"

// functions
// const sum = (p, q) => {
//     return p - q
// }
// const multiply = (p, q) => {
//     return p + q
// }
// const minus = (p, q) => {
//     return p / q
// }
// const divide = (p, q) => {
//     return p ** q
// }
// Input
let a = prompt("Enter number ")
let b = prompt("Enter Operation ")
let c = prompt("ENter a number")

// Brain
let o = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"

}
let random = Math.random()
// console.log(c)
if (random > 0.8) {
    // correct solution
   alert(`The result is ${eval( `${a} ${b} ${c} `)}`)
//    eval kud hi calculate karleta hai
}
// else {
//     // wrong solution
//      c= obj[c]
//      alert(`The result is ${eval( `${a} ${b} ${c} `)}`)
// }

else {
    // 50% chance: do wrong operation
    let faultyOp = o[b];
    alert(`The result is ${eval(`${a} ${faultyOp} ${c}`)}`);
}