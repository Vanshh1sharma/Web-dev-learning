// There are 3 ways by which we can add strings 
// 1. "" (double quote)
// 2. '' (single quote) 

/* TEMPLARTE LITERALS */

// also called backticks
// 3. `` (backtiks) 

// creating a string
 let vansh = "vansh"
 let ansh =  'kachua'
 let prakhar = `prakhar`

//  console.log(vansh ,  ansh , prakhar);

// length
//  now we can calculate these letter length also 
// by using command (.length)
// example

// console.log(vansh.length);
// console.log(ansh.length);
// improtant
// .lenght empty space bhi count karta hai 
// for example mai upar kachua ke baad 2 words ki kali space chori thi woh bhi count hogai

// console.log(prakhar.length);

// character calling
// we can call a indiviual charater in the string
// for example
// console.log(vansh[0]); // ise v print hoga 
// javascript me counting 0 se start hoti hai toh vansh will me 0,1,2,3,4 inte letters hai isme


// 1. "" (double slash)
// double slash can only close by double slash 

// 2. '' (single slash) 
// single slash can only close by double slash 

// IMPORTANT

// 3. `` (back slash)

//  back slash ke andr tum single slash ('') , double slash ("") or 

// we can insert variable in string using backtiks this is called "string interpolation"
// let kalo = "kaliya the don"
// let a = `This is ${kalo} ` //  kalo string ka naam hai 
// console.log(a);

// This process is called string interpolation


// for example
// let s ="simran"
// let v ='vansh sharma'
// let n =`nahi hai`
// console.log(`${v} is the lonley person ${n} with ${s} `);


// Escape sequence character

// if you want to add some ' (single quote) , "" (double quote) or any other words which is also a syntax so in that case we use Escape sequence to add those words

// console.log('prakhar is a 'good guy'); this will show syntax error to make it correct we use 
// back slash (\)

// console.log('prakhar is a \' good guy')
// console.log('prakhar is a \" good guy')

/* THere are different types of escape sequence like
  
 \n = newline - newline bana dega
 \t = tale - This give space , \t ke baad space de dega
 \r = carriage return - \r ke baad jitne letters likhoge utne letters samne se gayab hojaege 
 
// */
// console.log(" vansh sharma is very \n handsome");
// console.log(" vansh sharma is very  \t handsome ");
console.log(" kansh sharma is very handsome \r vansh ");

