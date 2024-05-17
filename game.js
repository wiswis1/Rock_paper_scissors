var rounds = 0
var proceed

function getComputerChoice(){
    let weapons = ["rock","paper","scissors"]
    const CHOICE = Math.floor(Math.random() * 3)
    return  weapons[CHOICE]
}

function getHumanChoice(){
    const CHOICE = prompt("Make your choice!")
    if((CHOICE.toLowerCase() == "rock") || (CHOICE.toLowerCase() == "scissors") || (CHOICE.toLowerCase() == "paper")){
        return CHOICE    
    }else{
        return getHumanChoice()
    }
}


function winRoundMessage(playerChoice, computerChoice, playerScore, computerScore){
    alert("You win! "+playerChoice+" beats "+computerChoice + "\nPlayer Score:  " + playerScore + "\nComputer score: " + computerScore)
}

function loseRoundMessage(playerChoice, computerChoice, playerScore, computerScore){
    alert("You Lose! "+computerChoice+" beats "+playerChoice + "\nHuman Score:  " + playerScore + " Computer score: " + computerScore)
}



function playGame(){
    var playerScore = 0
    var computerScore = 0
    
    while(rounds < 5){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
    }



    function playRound(humanChoice, computerChoice){
        var playerChoice = humanChoice.toLowerCase();
        if(playerChoice == computerChoice){
            alert("You dare draw with me human, WE GO AGAIN!\n" + "Human Score:  " + playerScore + "\nComputer score: " + computerScore)
            playerChoice = getHumanChoice().toLowerCase()
            computerChoice = getComputerChoice()
            playRound(playerChoice,computerChoice)
        }else if(playerChoice == "rock" && computerChoice == "scissors"){
            playerScore++
            winRoundMessage(playerChoice, computerChoice, playerScore, computerScore)
            rounds++
        }else if(playerChoice == "paper" && computerChoice == "rock"){
            playerScore++
            winRoundMessage(playerChoice, computerChoice, playerScore, computerScore)
            rounds++
        }else if(playerChoice == "scissors" && computerChoice == "paper"){
            playerScore++
            winRoundMessage(playerChoice, computerChoice, playerScore, computerScore)
        }else{
            computerScore++;
            loseRoundMessage(playerChoice, computerChoice, playerScore, computerScore)
            rounds++
        }
       
    }
    
    if(playerScore>computerScore){
        alert("You will not have the last laugh, challenge me again and I won't make it easy")
        
    }else{
        alert("Computers will always be smarter, better luck next time ;)")
    }
}


playGame()

