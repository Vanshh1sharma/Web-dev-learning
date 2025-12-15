// // sadly but this is not the question
// let vansh = [1,2,3,4,5,6]
// let a  = prompt("Enter a number")
// a = Number.parseInt(a)
// let newarr = vansh.map((value ) => {
//     console.log(value);   
//     return value + a 
// })

// alert(newarr)

// Question 1 - create an array of numbers and take input from the user to add numbers to this array

// let arr = [1,2,3,4,5]
// let b = prompt("Enter a number")
// b = Number.parseInt(b)
// arr.push(b)
// alert(arr)

// Question 2 - Keep adding numbers to the array in 1 question until 0 is added to the array

// we will use do - while loop

// let arr = [1,2,3,4,5]
// let b;
// do{
    
//     b = prompt("Enter a number")
//     b = Number.parseInt(b)
//     arr.push(b)
// }while(b!=0)
    
//     alert(arr)

// Question 3  filter for numbers divisible by 10 from a given array

// let dasvi = [90,80,50,40,5,3,7,1,5,4,5,1,10,20]
// let guda = dasvi.filter((friend) =>{
//     return friend % 10 ==0
// })
// console.log(guda);

// Question 4 create an array of square of given numbers 

// let a = [34,2,3,2,3]
// let newa = a.forEach((bhai) =>{
//     console.log(bhai*bhai)
// })

// alternate method using map

//  let dasvi = [5,3,7,1]
// let guda = dasvi.map((friend) =>{
//     return friend * friend
// })
// console.log(guda);

// Question 5 - USE reduce to calculate factorial of a given number from an aray of first n natural numbers (n being  the number whose factorial needs to be calculated) 

// let arr = [1,2,3,4,5,6,7]
// let newarr = arr.reduce((a1 ,a2) =>{
//     return a1 * a2
// })
// console.log( "THE factorial of first  7 natural number is " + newarr);
