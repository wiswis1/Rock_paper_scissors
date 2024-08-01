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

function getPlayerChoice(){
    // if(rounds==5){
    //     var replay = prompt("Do you want to play again").toLowerCase();
    // }


    var playerChoice;

    var rockBtn = document.querySelector("#rockBtn");
    var paperBtn = document.querySelector('#paperBtn');
    var scissorsBtn = document.querySelector('#scissorsBtn');


    rockBtn.addEventListener("click", () => {
        playerChoice = 'rock';
        playRound(playerChoice, getComputerChoice());
    })

    paperBtn.addEventListener("click", ()=> {
        playerChoice = 'paper';
        playRound(playerChoice, getComputerChoice());
    })  
    
    scissorsBtn.addEventListener("click", ()=> {
        playerChoice = 'scissors';
        playRound(playerChoice, getComputerChoice());
    })


    console.log("i see you")
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

    console.log("i see you at "+ rounds)
    // if(replay == "y" || replay == "yes"){
    //     rounds = 0
    //     playGame()
    // }
}


playGame()

