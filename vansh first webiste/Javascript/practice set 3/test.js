// Question 1
// write a program to print the marks of a students in an object using for loop

// let marks = {
//     vansh : 78,
//     prakhar : 86,
//     sartaj : 85,
//     simran : 67

// }
// for(let i =0 ; i < Object.keys(marks).length;i++)

// console.log("The marks of students " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);

// Question 2
// write the program on Q1 using for in loop

// let marks = {
//     vansh : 78,
//     prakhar : 86,
//     sartaj : 85,
//     simran : 67
// }

// for(let v in marks){
//  console.log("The marks of "+ v + " are " + marks[v])
// }

// Question 3
// write a program to print "try again" until the user enters the correct number
 
// let cn = 4;
// let i = null;
// while(i != cn ){

//     alert("try again")
//     i = parseInt(prompt("Enter the correct number"));
// }
// console.log("Nice you have found the number bro");

// alternate soltuion
 
// let cn = 7;
// let userguess;
// do{
//     userguess =parseInt(prompt("Enter a number"));
//     if(userguess != cn){
//         console.log("Try again!");

//     }
// }while(userguess != cn);

// console.log("Congratulations! you have Found the number");


// Question 4 write a function to find mean of 5 numbers

// const mean = (a , b , c , d ,e) => {
//     return (a + b + c + d + e)/5 ; 

// }
// console.log("The mean of number is " + mean(12,32,34,45,65));
