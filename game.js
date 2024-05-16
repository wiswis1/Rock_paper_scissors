function getComputerChoice(){
    let weapons = ["rock","paper","scissors"]
    const CHOICE = Math.floor(Math.random() * 3)
    return  weapons[CHOICE]
}

function getHumanChoice(){
    const CHOICE = prompt("Make your choice!")
    return CHOICE
}



// let computerChoice = getComputerChoice()
let humanChoice = getHumanChoice();
console.log(humanChoice)
// console.log(computerChoice)

