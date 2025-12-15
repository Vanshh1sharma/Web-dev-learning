// Methods in javascript 
// some of them are

// 1.tostring() - Converts an array to a string of a comma seprated values

// let vansh = [435 ,43,3,42,2]
// console.log(vansh);
// this is an array
// but
// we can convert it to string
// console.log(vansh.toString());
// and now this is a string


// 2.join() -  joins all the array elements using a seprator
// - kuch nahi bc beech me ( and , - ) lagane ke kaam ata hai

// let n = [23,23,2,4,21,34]
// console.log(vansh.join("-"));
// console.log(vansh.join(" and "));


// 3.pop() - removes the last element from the array

// - This will return the last removing value if called directly and 

// this will change the original array , ek baar chala diya toh original copy me change ajaega

// let vansh = [435 ,43,3,42,2]

// let v = vansh.pop() // isse sirf jo number remove hora hai woh print hoga Aur console.log(vansh.pop()) se bhi

// vansh.pop() // isse array pura print hoga aur value hat jaegi last wali

// console.log(vansh)


// 4. push() - adds a new element at the end of the array
// - isse ham ek naya element add kar sakte hai at the end of the array

// this will also modified the original arrays 

// let a = [3,2,4,1,7]
// a.push(54)
// console.log(a); // THis will add the new number to the array

// console.log(a.length); // this will print the new length 

// 5.shift()  =  Removes first element and returns it

// same as pop()

// let vansh = [435 ,43,3,42,2]

// IF you don't gives the value it will automatically take 0 index and

// console.log(vansh.shift());
// This will return 435

// vansh.shift() // - remove the first element 
// console.log(vansh);

// unshift() - adds the element to the beginning returns new array length

// same as

// push

// let hello = [23,32,2,2,1]
// hello.unshift(32)
// console.log(hello)
// this will add the 32 to the first place

// this delete is a operator more over method

// 7.delete - array element can be deleted using the  delete operator 
// but
// delete karne ke baad deleted array ki jagah undefined aaega 

// let d = [23,32,2,34,23,42]

// delete d[1]
// console.log(d)
// // 32 ki jagah <1 empty item aaega aur array ki length same rahegi>

// 8.concat() - used to join arrays to the given array 
// - 2 arrays ko join karne liye hota hai ye use

//  Returns the concat of the 2 or 3 or may be more arrays

//  this will not change the existing arrays 
// this will give the new array  (original array ko kuch nahi hoga)

// let _a = [32,32,22,32]
// let _b = [323,3232,92,302]
// let _c = [3322,35782,262,98]

// console.log(_a.concat(_b  )) // 2 log concat hue hai
// console.log(_a.concat(_b , _c)) // 3 log concat hue hai ek sath


// 9.sort() - sort() method is used to sort an array alphabetically
// sort , (in sab string man kar sort karega) karegra first letter dekh kar first 1 hona chiaye fir woh chahe 1milllion kuy nah ho it will come on first .

//  THIS is a - INterview question 

// THis will change the original arrays 

// let hero = [13,322,42,23,3222222222222222,111111111111111]
// hero.sort()
// console.log(hero); 

// If want to have output in ascending order we will use compare function in this sort 
 
// let compare = (a ,b) =>{
//     // return a-b // a-b ascending order me sort karke dega (2 number lega minus karega for example 13 , 23 ko krega = -10 aaega fir 23 aur 42 = -19 aaega  asse karke woh print kardega )

//     // If we want it in desending order 
//     // HAm b-a kardege
//     return b-a // ye desending order me sort karke dega 
// }
// let hero = [13,322,42,23,3222222222222222,111111111111111]
// hero.sort(compare)
// console.log(hero); 


// 10. reverse() - reverses the element in the array

// this will change the original array

// let kutaa = [323,32,2,3,2,32,5]
// let simran = "23,323,2,"
// simran.reverse() // YE sirf array pr kaam karega  string pr you can't use tthis array
// kutaa.reverse()
// console.log(kutaa);
// console.log(simran);

// 11. splice() - Splice is used to add new array

// dekho bhaiyo splice is advance way to push or unshift

let beti = [32,2,1,21,32,4]

// This will change the original array

// first batana hai kaunsi place se hatane hai element - in my case maine bola 2 se

// second batana hai ki kitne hatane hai - in  my case maine bola 2 hatane hai

//  third batana hai ki unki jagah kaunse element dalne hai - in my case maine bola mujhko 32 or 5 dalne hai

// beti.splice(2 , 2 ,32,5)
// isme ek catch hai aur tum bologe ki 2 se hatana hai toh woh 2 wala element bhi hataega  theek hai

// console.log(beti);

// Ham deleted elements bhi dekh sakte hai

// let kamina = beti.splice(2 , 2 ,32,5)

// console.log(kamina);
// this will show the deleted element in above case those are 1 ,21 
// so this will print (1,21) 



// 12. slice() - slices out a piece from an array it creates a new array

// - Dekho bhaiyo kuch nahi jitne element bologe utne kat dega  

// This will not change the original array 
// this will create a new array 

// let kata = [23,2,26,1,45]
// let ham = kata.slice(2) // isse ye 26 se 45 tak print kardega 

// and if we gave him a start and end  toh woh uske beech me jitne number aage sabko print kardega

// let gf = kata.slice(1,4) // This will print 2 ,26,1   (INdex number 1 se 4 ke beech me saare number se print kardega)


// console.log(kata); isse kuch nahi hoga kuyki slice original array ko change nahi karta hai 

// console.log(gf);






