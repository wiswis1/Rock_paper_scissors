var rounds = 0

function getComputerChoice(){
    let weapons = ["rock","paper","scissors"]
    const CHOICE = Math.floor(Math.random() * 3)
    return  weapons[CHOICE]
}

function getHumanChoice(){
    const CHOICE = prompt("Make your choice!")
    return CHOICE
}


function playGame(){
    var humanScore = 0
    var computerScore = 0
    
    while(rounds < 5){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
    }

    function playRound(humanChoice, computerChoice){
        var playerChoice = humanChoice.toLowerCase();
        
        if(playerChoice == computerChoice){
            alert("You dare draw with me human, WE GO AGAIN!")
            playerChoice = getHumanChoice().toLowerCase()
            computerChoice = getComputerChoice()
            playRound(playerChoice,computerChoice)
        }else if(playerChoice == "rock" && computerChoice == "scissors"){
            alert("You win! "+playerChoice+" beats "+computerChoice)
            humanScore++
            rounds++
        }else if(playerChoice == "paper" && computerChoice == "rock"){
            alert("You win! "+playerChoice+" beats "+computerChoice)
            humanScore++
            rounds++
        }else if(playerChoice == "scissors" && computerChoice == "paper"){
            alert("You win! "+playerChoice+" beats "+computerChoice)
            humanScore++
            rounds++
        }else{
            alert("You Lose! "+computerChoice+" beats "+playerChoice)
            computerScore++;
            rounds++
        }
    }
    
    if(humanScore>computerScore){
        alert("You will not have the last laugh, challenge me again and I won't make it easy")
    }else{
        alert("Computers will always be smarter, better luck next time ;)")
    }
}


playGame()

