// console.log(console)
// we use this command to list all the functions of console
// There are several methods to list them u can use the above command

// Methods

// console.error()
// To specify the error  by using this command we can mark an error to  check the code
// console.error("This is error")

// NOTE
// you can list all the error , wanring and etc on the console tab in a browser



// console.assert()
// this checks the statement , if the statement is true then it will pass else it will show an error
// galat hone pr error dekhaega
// console.assert(5>32)
// this will print assertion failed 

// console.assert(5<32)
// this will show nothing and pass


// console.clear()
// this will clear the console and upar likh kar aaega console was clear
// console.clear()

// console.table()
// this will make a table of the objects you call in that bracket
vansh = { a: 32 , b:23 , c:12, d:55 , simi:345}
// and now if i call the object with console.table we will get all these elements in a table
// console.table(vansh)
// you can check on browser , how this table looks

// console.warn()
// This is used to give warning , helps a coder to add a warning 
// console.warn("Hey this is a warning ")


// console.time() / console.timeEnd()
// console.time() is used to start the time and console.timeEnd is used to close that timer and record how much time is calculated
// console.time("p")
// console.timeEnd("p")
// for exmaple i'll show with a for loop
// console.time("bete")
for(let i = 0 ; i<5; i++){
    // console.log(i)

}
// console.timeEnd("bete")

// main commands to interact with client is 
// . alert
// . prompt
// . confirm
 
// Note these commands are old fashion and we don't use these commands now...
// main reason 
// these make the website looks old
// and accesibilty ko kaam karte hai




// document.write
// document.write body me kuch bhi likhne ke liye use hota hai 
// for example 
// agr maine prompt me kuch likha aur usko document.write ke andr dal diya toh woh webpage ki body me dal dega
// let a = prompt("Enter a number")
// document.write(a)

// default value of prompt

// let a = prompt("Enter a number" , 32)
// 32 is the default value of the prompt
// document.write(a)

// confirm("bete")

// let vansh = comfirm("Bete , do you want a girlfriend")

// if(vansh){
//     document.write("Nahi milegi ")
// }
// else{
//     document.write("kuy gay hai bsdk")
// }