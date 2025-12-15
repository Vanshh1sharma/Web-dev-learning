let user = prompt("Enter your symbol")

let cpu = Math.floor(Math.random()*3)
let cpuI = ["s" , "w" , "g"][cpu]

let round = (user , cpuI ) =>{

    if(user === cpuI){
        return "Nobody won"

    }
    else if(user === "s" && cpuI === "w"){
        return "user won"
    }
    else if(user === "w" && cpuI === "s"){
        return "cpu won"
    }
    else if(user === "g" && cpuI === "w"){
        return "cpu won"
    }
    else if(user === "s" && cpuI === "g"){
        return "cpu won"
    }
    else if(user === "g" && cpuI === "s"){
        return "user won"
    }
    else if(user === "w" && cpuI === "g"){
        return "user won"
    }
}
let result = round(user, cpuI)

document.write(`Cpu : ${cpuI} <br> User : ${user} <br> The winner is : ${result}`)
