var rounds = 0
var playerScore = 0
var computerScore = 0

function winRoundMessage(playerChoice, computerChoice, playerScore, computerScore){
    alert("You win! "+playerChoice+" beats "+computerChoice + "\nPlayer Score:  " + playerScore + "\nComputer score: " + computerScore)
}

function loseRoundMessage(playerChoice, computerChoice, playerScore, computerScore){
    alert("You Lose! "+computerChoice+" beats "+playerChoice + "\nHuman Score:  " + playerScore + "\nComputer score: " + computerScore)
}


function getComputerChoice(){
    const weapons = ["rock","paper","scissors"]
    const CHOICE = Math.floor(Math.random() * 3)
    return  weapons[CHOICE]
}

function replayGame(){  
    if(playerScore>computerScore){
        alert("You will not have the last laugh, challenge me again and I won't make it easy")
    }else{
        alert("Computers will always be smarter, better luck next time ;)")
    }
    
    var replay = prompt("Do you want to play again?").toLowerCase()
    if(replay == "yes" || replay == "y"){
        rounds = 0
        playerScore = 0
        computerScore = 0
    }
}


function getPlayerChoice(){
    var playerChoice;
    const buttons = document.querySelectorAll("button");

    function playerChoice(event){
        switch(event.target.id){
            case "rockBtn":
                playerChoice = 'rock';
                playRound(playerChoice, getComputerChoice());
                break;
            case "paperBtn":
                playerChoice = 'paper';
                playRound(playerChoice, getComputerChoice());
                break;
            case "scissorsBtn":
                playerChoice = 'scissors';
                playRound(playerChoice, getComputerChoice());
                break;
            default:
                break;
        }
        console.log(event.target)
        if(rounds ==5){
            replayGame()
        }    
    }

    buttons.forEach((button) => {
        button.addEventListener("click",playerChoice)
    });
}


function playRound(playerChoice, computerChoice){
    if(playerChoice == computerChoice){
        alert("You dare draw with me human, WE GO AGAIN!\n" + "Human Score:  " + playerScore + "\nComputer score: " + computerScore)
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
        rounds++
    }else{
        computerScore++;
        loseRoundMessage(playerChoice, computerChoice, playerScore, computerScore)
        rounds++
    }
}


function playGame(){
    getPlayerChoice();
}


playGame()

