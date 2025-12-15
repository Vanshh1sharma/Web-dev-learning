// for loops 

// Classical for loop   -  isko yaad karlo brother , this is very imp
// let a = [132,22,23,32,32]
// for(let i = 0 ; i < a.length ; i++){
//     console.log(a[i]);
// }

// for each loop  --indiviual elements ko target karne ke liye hota hai , isse ham saare arrays ko indiviuallly target kar sakte hai
let b =[1,2,3,4,5]

b.forEach((Element) =>{
    // console.log(Element*Element);
    
    // for each loop it take 3 arrguments value index array
    // value - in  case of b = value is 1,2,3,4,5
    // index - is 0,1,2,3,4
    // array - pure ko sath me array bolte hai
    
})

// array.form = This will convert anything into array ("mostly use - converting HTml collection into array")

let v = "vansh"
let samridhi  = Array.from(v)
// console.log(samridhi);
// THis will be converted into string

//  for.. of loop  -- for of loop is a shortcut method to acces the elements using for loop 
//  these function do not modify our array
let h = [21,12,3,23,4]
for(let g of h ){
    // console.log(g)
}

// console.log("vansh bete");


// for..in loop  -- for in is used to print keys in array  , there are also keys which we cannot see , so this print those 
let f =[23,32,2,23]
for(let s in f){
    // console.log(s); // printing s  will give us the keys or you can say index value 
    // to get the element we need to print
    // console.log(f[s]);
    
    
}
// MAP - return an array
// map() -- map is used in the new version of javascript basically it is the same but we use map to return new array
//  these function do not modify our array
let arr = [32,23,2,32,]
//  map function have 3 arrgument just like for-each value , index , array
let q = arr.map((value , index , array) =>{
    // console.log(value , index , array); // when you print this it will give the same value as for-each loop 
    return value + index // we can also add values in this function

    // but map function has a special feature  of retuning a new array or you can say (it creates a new array)
 
    
})

// console.log(q); // we have to print this because map function will create a new array and will store it in q and in order to get that we have to print "q"

// Filter - return an array
// filter method  - filter ke andr ham ek test le sakte hai jo pass karega wahi aaege
//  these function do not modify our array
// let vrushka = [23,2,32,31,2,3,4,5]
// let vanika = vrushka.filter((hero)=>{
//     return hero < 20 
// })
// console.log(vanika);

// Reduce - return a value
// Reduce method  - Reduce returns a value , this is a little bit cool so be kind while learning it

// let sartaj = [2,3,4,5,6]
// let kutaa = sartaj.reduce((par , thvi) =>{
//     return par + thvi 
// })
// console.log(kutaa); //20


// isme dekho dosto kuchnahi reduce pahale starting ki 2 value lega unko add karega and uske add kari hui value aur 3rd value ko add karega fir asa hi karega and last me ek value print kar dega

// we can make a function like a variable to

// let ran = [1,2,2,3,4]
// const priya = (bheem , chutki) =>{
//     return bheem + chutki

// }
// let new_vansh = ran.reduce(priya)
// console.log(new_vansh); //12
