// Making a game in which you have to guess a number and the system will also guess a number if your matches you win , every guess will minus a chance or point , u can say ..


// system will generate the random number here
let random = Math.floor(Math.random()*10 ) + 1
console.log(random);
let usernum ;

// points 
let chance  = 0 ;
let a = 0 ; 

// user ka number 

while(usernum != random){
    chance = 100-a
  usernum = prompt("Enter your number")
 if(usernum == random){
    alert("Congratulation you have guessed the correct number  ");
    alert("Your score is " + chance);
 }
else if (usernum < random && usernum <100){
    alert("Your number is smaller than the Random number");
    a++
}
else if(usernum > random && usernum > 0){
   alert("Your number is greater than the Random number");
   a++
   
}
else{
  alert("Enter the number between 1 to 100 ");
    
}
}




