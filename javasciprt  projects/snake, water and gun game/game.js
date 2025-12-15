
let user = prompt("Enter  your symbol")


let vansh =  Math.floor(Math.random()*3)
console.log(vansh);

let arr = ["s" ,"w" , "g" ][vansh] // vansh ek index number hai iska aur kuch nahi bc



let funco = (user , arr) =>{

    if(user === arr){
        return "NObody match is tied";
    }    
    else if(user === "s" && arr === "w"){
        return "You"
        
    }
    else if(user === "w" && arr === "s"){
        return "cpu"
        
    }
    else if(user === "w" && arr === "g"){
        return "You"

    }
    else if(user === "g" && arr === "w"){
        return "cpu"

    }
    else if(user === "g" && arr === "s"){
        return "You"

    }
    else if(user === "s" && arr === "g"){
        return "cpu"

    }
  
}

let result = funco(user,arr) // this function checks the user and arr value
// document.write("The winner is : " + result)
document.write(`User : ${user} , cpu : ${arr} <br> Congralutaions the winner is : ${result}`);

