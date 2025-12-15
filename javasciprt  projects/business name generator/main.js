// step 1 - stirng of adjective , shop name , another word
// step 2 - ill  give the list of adjective to user and asks him to pick one
// step  3 - whichever he picks ill run the if , else statement and with name of adjectives 
// step4 - i will create different fucntions with different name to call in that if,else statement

// list of adjectives 
// Crazy 
// Amazing
// Fire 

// list of shopname
// Engine
// Foods
// Garments

// list of Another Word
// Bros
// Limited
// Hub


// creating different functions of string
let beti  = (x,y,z) =>{
    return x+y+z;
}

let = "Crazy"
let = "Amazing"
let = "Fire"

// FOr Adjectives
// alert("Choose any these name adjective and write it in the next Tab");
// alert("Crazy" + "Amazing" + "Fire");
// let a = prompt("Enter any one of the name you have seen before")
let a = " hero "

// FOr shopname
// alert("Choose any these name Shopname and write it in the next Tab");
// alert("Engine" + "Foods" + "Garments");
// let b = prompt("Enter any one of the name you have seen before")
let b = " heroine "


// FOr Anotherna
// alert("Choose any these name Anotger name and write it in the next Tab");
// alert("Bros" + "Limited" + "Hub");
// let c = prompt("Enter any one of the name you have seen before")
let c = " aur mai "
// console.log(beti(a , b ,c ));
if( a === "hero" && b === "heroine" && c=== "aur mai " ){
    console.log(beti(a , b ,c ));
    
}
else {
    console.log("chud gae guru");
    
}


