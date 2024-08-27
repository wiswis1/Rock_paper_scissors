var rounds = 0
var playerScore = 0
var computerScore = 0

const pScore = document.getElementById("playerScore");
const cScore = document.getElementById("computerScore");

function getComputerChoice() {
    const weapons = ["rock", "paper", "scissors"]
    const CHOICE = Math.floor(Math.random() * 3)
    return weapons[CHOICE]
}


function updatePlayerScore() {
    playerScore++
    pScore.textContent = "Player: " + playerScore
    rounds++
}

function updateComputerScore() {
    computerScore++;
    cScore.textContent = "Computer: " + computerScore;
    rounds++
}


const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const restartBtn = document.querySelector(".restartBtn");

function replayGame() {
    enablePlayAgain();
    const result = document.querySelector("h3.result");
    if (playerScore > computerScore) {
        result.textContent = "You won, you're better than the average AI";
    } else {
        result.textContent = "You lost, better luck next time!";
    }
    
    restartBtn.addEventListener("click", resetGame);
    return;
}





function enablePlayAgain() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}


function disablePlayAgain() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}


function resetGame(){
    var round = document.querySelector("h2.round");
    round.textContent = "MAKE YOUR CHOICE";
    playerScore = 0;
    computerScore = 0;
    rounds = 0;
    pScore.textContent = "Player: " + playerScore;
    cScore.textContent = "Computer: " + computerScore;
    disablePlayAgain();

}



function playRound(playerChoice, computerChoice) {
    var round = document.querySelector("h2.round");
    if (playerChoice == computerChoice) {
        round.textContent = "Its a draw!!"
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        round.textContent = "Rock beats Scissors!"
        updatePlayerScore();
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        round.textContent = "Paper beats Rock!"
        updatePlayerScore();
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        round.textContent = "Scissors beats paper!"
        updatePlayerScore();
    } else {
        round.textContent = computerChoice + " beats " + playerChoice
        updateComputerScore();
    }

    if(rounds === 5){
        replayGame();
    }

}

function playGame() {
    var playerChoice;
    const buttons = document.querySelectorAll("button");
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
    }

    buttons.forEach((button) => {
        button.addEventListener("click", playerChoice)
    });
}

playGame()

