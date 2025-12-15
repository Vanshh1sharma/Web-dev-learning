let random = Math.random()
let first , second , third ;

if(random<0.33){
    first = "crazy"
}

else if(random<0.66 && random>=0.33){
    second = "Amazing"
}
else{
    third = "Fire"
}

random = Math.random()

if(random<0.33){
    first = "Engine"
}

else if(random<0.66 && random>=0.33){
    second = "Foods"
}
else{
    third = "Garments"
}


random = Math.random()

if(random<0.33){
    first = "Bros"
}

else if(random<0.66 && random>=0.33){
   second = "Limited"
}
else{
  third = "Hub"
}

console.log(` ${first} ${second} ${third}`);
