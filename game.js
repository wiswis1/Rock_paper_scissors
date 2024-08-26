var rounds = 0
var playerScore = 0
var computerScore = 0


function getComputerChoice() {
    const weapons = ["rock", "paper", "scissors"]
    const CHOICE = Math.floor(Math.random() * 3)
    return weapons[CHOICE]
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



function replayGame() {
    const result = document.getElementById("endGame");
    if (playerScore > computerScore) {
        result.textContent = "You will not have the last laugh, challenge me again and I won't make it easy"
    } else {
        result.textContent = "Computers will always be smarter, better luck next time";
    }
    // const overlay = document.
    // enablePlayAgain();

    // var replay = prompt("Do you want to play again?").toLowerCase()
    // if (replay == "yes" || replay == "y") {
    //     rounds = 0
    //     playerScore = 0
    //     computerScore = 0
    // }
}



//make two functions, one to turn on the overlay and one to turn off, the overlay should have a button that can let the player restart the game

function enablePlayAgain(){
    // document.getElementById("restart").style.visibility = "visible";

}


function disablePlayAgain(){
    // document.getElementById("restart").style.visibility = "hidden";
}



function playRound(playerChoice, computerChoice) {
    var result = document.querySelector("h2.result");
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

        if (rounds == 5) {
            replayGame()

        }
    }

    buttons.forEach((button) => {
        button.addEventListener("click", playerChoice)
    });
}

playGame()

