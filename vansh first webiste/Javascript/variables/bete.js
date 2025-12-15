// console.log("vansh sharma is handsome")
// there are two type of programming languages 
// Static and dynamic

// * static type  programming language is like c it does not allow to change the code in real time
// * Dynamic type programming languages is like javascript which allows us to change the code in real time

// var is a variable 
// a is a identifier
// (=) assigment operator
// And this process is known as Declaring variables
// some constant value is known as literal

// var a = 2;  // a is constant 23
// var b = 3;
// var c = "vansh"
// console.log(a + b + 6 )
// console.log(typeof a , typeof b, typeof c )

// ' Rules for chosing a variable name is '  

// * letter , digits , underscore and $ are allowed
// must begin with a , _ , or $ you can't begin with numbers . 
// * example
//  var _a = 34
//  var $dollar = 65
//  console.log(_a+ $dollar)
// * example
// var 334simi = 34;
// console.log("334simi")  this will show a syntax error

// AND 

//javascript variables are case sensesitive
//for example Vansh and vansh are different 


// var and let

// var is gobally scoped
// let is blocked scoped
// const a1 = 56 // const can't be changed throwout the code 
// a1 = a1+1 // this is not allowed 
//this can't be used , shows error

// In Brief
// you can't change value of const


// LET

// let v =34
// let is blocked scoped 
// so if let is defined here pure code me ye hi chalega 
// but (agr) ham  
// ek naya block bana kar usme dusra let define karde toh us block ke liye woh wala let kaam karega
// {
//     let v = 20
//     console.log(v)
// }
// console.log(v)

// let can updated but not re-declared
// let k =vansh
// let k= hero // this will show syntax error

//  right way to do it is 

// let vansh = 23
// vansh = 32

// for more info prefer notes

// but in variable

// assa nahi hota hai
// var vansh = 29

// {
//     var vansh =12
//     console.log(vansh)
// }
// console.log(vansh)

// var me woh dono jagah print kardega us wale vansh ko jo baad me likha hoga 
// because var is gobal variable


// Primative data type 
// there are 7types of data type 
// 1. null 
// 2. Number
// 3. string
// 4.Symbol
// 5.undefine
// 6.boolen
// 7.Big int
// yaad karne ki trick 
// nn bb ss u
// For example

// let a = 2;
// let b = 23.3
// let c = "kachua"
// note
// we use const for boolen cause it can't be change
// let can be change
// const k = true
// // let v =undefined
// // or
// let v
// let h = null
// let j = BigInt("45") + BigInt("5")
// let n = Symbol(" I am a symbol ")


// console.log(a, b, c, k, v, h, j, n)
// console.log(typeof a, typeof b, typeof c, typeof k, typeof v, typeof h, typeof j, typeof n)


// NOte 
// type of null is Object (very very important question)

// explanation 
// ye ek galti hai shayad and now we can't correct it cause bahut saaara code ispr depend karta hai isilye we can't correct it


// Objects

// non-primatives data types are objects

// object : Helps to get multiple detail about a thing(variable , let , const ,function or may be another object) in a single command 


// lets declare a object

//  in that object 
// (name , working)  is key 
// and
// (vansh, Student) is value 

// RUle is same as naming variable
// for naming object

// you can assign any primative data type in the key..

let o = {
    name: "vansh",
    working: "student",
    age: 34,
    // note agr key me space hai toh ham usse double qoute me rakhege
    "female- friends": true
}
// const p = {
//     name : "vansh",
//     working : "student",
//     age : 34,
//     // note agr key me space hai toh ham usse double qoute me rakhege
//     "female- friends": true
// }
// console.log(o)

// o.salary = 23.3
// //  you can also use this method to  assign new key and values to the object 
// console.log(o)

// console.log(p)

console.log(o["name"])
// // or 
// // you can use . instead of sqaure bracket
// console.log(o.age)

// console.log(o["female- friends"])

// console.log(o["female"])// agr ham kuch asa likhe log me jo ki hamare object me nahi hai toh undefined print hojaega
