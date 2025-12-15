// faulty calculator

document.body.style.backgroundColor = "gray"

// functions
const sum = (p, q) => {
    return p - q
}
const multiply = (p, q) => {
    return p + q
}
const minus = (p, q) => {
    return p / q
}
const divide = (p, q) => {
    return p ** q
}
// Input
let a = prompt("Enter number ")
let b = prompt("Enter Operation ")
let c = prompt("ENter a number")

// Brain

// "+": "-",
// "*": "+",
// "-": "/",
// "/": "**"


let random = Math.random()
// console.log(c)
if (random > 0.1) {

    if (b == "+") {

        alert(a + b)

    }

    else if (b == "-") {

        alert(a - b)

    }

    else if (b == "*") {

        alert(a * b)

    }
    else if (b == "/") {

        alert(a / b)

    }
    else {
        alert("write the correct number")
    }
}

if (random < 0.1) {

    if (b == "+") {

        alert(sum)

    }

    else if (b == "-") {

        alert(minus)

    }

    else if (b == "*") {

        alert(multiply)

    }

    else if (b == "/") {

        alert(divide)

    }
}

else {
    alert("write the correct number")
}