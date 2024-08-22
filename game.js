var rounds = 0
var playerScore = 0
var computerScore = 0
var gamesWon = 0

function winRoundMessage(playerChoice, computerChoice) {
    alert("You win! " + playerChoice + " beats " + computerChoice + "\nPlayer Score:  " + playerScore + "\nComputer score: " + computerScore)
}

function loseRoundMessage(playerChoice, computerChoice) {
    alert("You Lose! " + computerChoice + " beats " + playerChoice + "\nHuman Score:  " + playerScore + "\nComputer score: " + computerScore)
}


function getComputerChoice() {
    const weapons = ["rock", "paper", "scissors"]
    const CHOICE = Math.floor(Math.random() * 3)
    return weapons[CHOICE]
}

function replayGame() {
    if (playerScore > computerScore) {
        alert("You will not have the last laugh, challenge me again and I won't make it easy")
        gamesWon++
    } else {
        alert("Computers will always be smarter, better luck next time ;)")
    }

    var replay = prompt("Do you want to play again?").toLowerCase()
    if (replay == "yes" || replay == "y") {
        rounds = 0
        playerScore = 0
        computerScore = 0
    }
}


function updatePlayerScore(){
    playerScore++
    const pScore = document.getElementById("playerScore")
    pScore.textContent = "Player: "+playerScore
    rounds++
}

function updateComputerScore(){
    computerScore++;
    const cScore = document.getElementById("computerScore")
    cScore.textContent = "Computer: "+computerScore;
    rounds++
}



function playRound(playerChoice, computerChoice) {
    var result = document.querySelector("h2.result");
    // var score = document.querySelectorAll("announcement>")
    if (playerChoice == computerChoice) {
        result.textContent = "Its a draw!!"
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        result.textContent = "Rock beats Scissors!"
        updatePlayerScore();
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        result.textContent = "Paper beats Rock!"
        updatePlayerScore();
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        result.textContent = "Scissors beats paper!"
        updatePlayerScore();
    } else {
        result.textContent = computerChoice + " beats " + playerChoice
        updateComputerScore();
    }

}

function playGame() {
    var playerChoice;
    const buttons = document.querySelectorAll("button");
    // const div = document.querySelector("div")



    function playerChoice(event) {
        switch (event.target.id) {
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

        // div.textContent = "Player: "+playerScore +" Computer: "+computerScore;

        if (rounds == 5) {
            replayGame()
            console.log("game ended")
        }
    }

    buttons.forEach((button) => {
        button.addEventListener("click", playerChoice)
    });
}

playGame()

