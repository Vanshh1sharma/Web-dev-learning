// Practice set 

// Question 1 

// let age = prompt("Enter you age")
// age = Number.parseInt(age)

// if(age > 18 ){
//     console.log("You can dirve")

// }
// else{
//     console.log("you can't drive")
// }

// Question 2

// let runagain = true; 
// const vansh = (age)=>{
//     return age>=18?true:false
// }

// while(runagain){

//     let age = prompt("Enter you age")
//     age = Number.parseInt(age)



//     if(vansh(age)){
//         alert("You can dirve")

//     }
//     else{
//         alert("you can't drive")
//     }
//     runagain = confirm("Do you want to play again ?")
// }

// Question 3 show error if wrong age

// let runagain = true;
// const vansh = (age) => {
//     return age >= 18 ? true : false
// }

// while (runagain) {

//     let age = prompt("Enter you age")
//     age = Number.parseInt(age)


//     if (age < 0) {
//         console.error("please enter a valid age");
//         break;

//     }


//     if (vansh(age)) {
//         alert("You can dirve")

//     }
//     else {
//         alert("you can't drive")
//     }
//     runagain = confirm("Do you want to play again ?")
// }

// Question 4 redirection

let luck = prompt("ENter a number let's check your luck")

luck = Number.parseInt(luck)

if(luck > 12){
    
     location.href = "https://youtube.com"
}
else{
    document.body.style.backgroundColor = "pink"
}

// Question 5 change the background color on user input

// let vansh = prompt("Enter the color")
// document.body.style.backgroundColor = vansh
