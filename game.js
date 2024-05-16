function getComputerChoice(){
    let weapons = ["rock","paper","scissors"]
    const CHOICE = Math.floor(Math.random() * 3);
    return  weapons[CHOICE]
}

let computerChoice = getComputerChoice()
console.log(computerChoice)
