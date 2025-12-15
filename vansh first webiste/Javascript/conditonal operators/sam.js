let a = prompt("Enter your age")
// console.log(typeof a)
// type of a in prompt is String

// type casting (read about it on goggle imp)
// if you have to make it a number we use a function 
a = Number .parseInt(a) // Converting string  into number 
// console.log(typeof a)

// if - else statement

// you can also add grace to this program usning + operator
let grace = 2
if(a + grace>18){

    alert("meri jaan , you can drive")

}

else{
    alert("Hat bhai padhai waddai kar , you cannot drive")
}
 
// iF - else -if statement
// if(a<0){

//     alert("Tu insaan hi hai ? , invalid age")

// }
// else if(a<11){
    
//     alert("Bete socha bhi kase tune , you can't drive")

// } 
// else if(a >= 11 && a<=18){

//     alert("Hmm , sahi soch hai 18 ka hone ke baad chalana , you can't drive in real life , try driving in games")

// } 

// else{
//     alert("Meri jaan , you can drive")
// }
// console.log("Done")


// ternary operator

let v = 1
console.log( v<10? "you can't drive": "you can drive" )

// ?   = if
//  : = else