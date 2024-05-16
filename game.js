var humanScore = 0
var computerScore = 0


function getComputerChoice(){
    let weapons = ["rock","paper","scissors"]
    const CHOICE = Math.floor(Math.random() * 3)
    return  weapons[CHOICE]
}

function getHumanChoice(){
    const CHOICE = prompt("Make your choice!")
    return CHOICE
}

function playRound(humanChoice, computerChoice){
    var playerChoice = humanChoice.toLowerCase();
    
    if(playerChoice == computerChoice){
        console.log("You dare draw with me human, WE GO AGAIN!")
        playerChoice = getHumanChoice().toLowerCase()
        computerChoice = getComputerChoice()
        playRound(playerChoice,computerChoice)
    }else if(playerChoice == "rock" && computerChoice == "scissors"){
        console.log("You win! "+playerChoice+" beats "+computerChoice)
        humanScore++
    }else if(playerChoice == "paper" && computerChoice == "rock"){
        console.log("You win! "+playerChoice+" beats "+computerChoice)
        humanScore++
    }else if(playerChoice == "scissors" && computerChoice == "paper"){
        console.log("You win! "+playerChoice+" beats "+computerChoice)
        humanScore++
    }else{
        console.log("You Lose! "+computerChoice+" beats "+"rock")
        computerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)

console.log(humanScore, computerScore, computerSelection)

