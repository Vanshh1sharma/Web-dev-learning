var a = "vansh"
console.log(a+2)
console.log(typeof a+2)

const vansh = {
    Name : "vansh sharma",
    salary : 2,
    "Girl-friend": false 
}
console.log(vansh)
//  vansh = 2  No we can't change a const to hold a number later

vansh.age = 19
vansh.Name = "baby"

vansh.friends = BigInt("5") + BigInt("1")
console.log(vansh)

let dictionary ={
    mendicant : "a pauper who lives by begging",
    meretricious : "tastelessly showy",
    vitiate : "make imperfect",
    vapid : "lacking significance or liveliness or spirit or zest",
    ruddy : "inclined to a healthy reddish color"

}
console.log(dictionary)
console.log(dictionary.mendicant)