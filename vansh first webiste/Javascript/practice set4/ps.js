// practice set 

// Question1
// what will the following print in the javascript
// console.log("har\".length");
// this will print = 4

// Question 2

// include 

// includes - ye bata hai ki words sentence me hai ki nahi 
// agr hoga toh true print karega  warna false karega
// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const word = 'fox';
// console.log(sentence.includes(word));

// console.log(`The word "${word}" ${
//     sentence.includes(word) ? 'is' : 'is not'} in the sentence`,);

 // startswith

 // startswith - ye bata ta hai ki start hone wala world jo ham chahate hai woh hai ki nahi
 // aur isme ham length ka number check karke bhi dekh sakte hai ki first place pr hai ki nahi
 // agr hoga toh true print karega  warna false karega.

//  const str1 = 'Saturday night plans';

//  console.log(str1.startsWith('Sat'));
 // Expected output: true

 // checking with number 
//  console.log(str1.startsWith('Sat',0));
//  console.log(str1.startsWith('sat',0));
 

// console.log(str1.startsWith('Sat', 3));
// Expected output: false


 // endswith
 // endswith - ye bata ta hai ki end hone wala world jo ham chahate hai woh hai ki nahi
 // aur isme ham length ka number check karke bhi dekh sakte hai ki first place pr hai ki nahi
 // agr hoga toh true print karega  warna false karega

//  const str2 = 'Cats are the best!';

// console.log(str2.endsWith('best!'));
// Expected output: true

// console.log(str2.endsWith('best', 17));
// Expected output: true

// const str3 = 'Is this a question?';

// console.log(str3.endsWith('question'));
// Expected output: false

// Question 3

let vansh = "KUTAA"
console.log(vansh.toLowerCase());

 // Question 4 
//  - Extract the amount of the string "Please give RS 1000"

let amount = "Please give RS 1000"

console.log(amount.slice(15,19));

// Question 5 
// - Try to change 4* character of a given string were you able to do it ?

let simi = "simran"
simi[3] = "i"
// strings are imuteable isilye ham string ko change nahi kar sakte
console.log(simi , simi[3]);
