var rounds = 0
var proceed

function getComputerChoice(){
    let weapons = ["rock","paper","scissors"]
    const CHOICE = Math.floor(Math.random() * 3)
    return  weapons[CHOICE]
}

function getHumanChoice(){
    const CHOICE = prompt("Make your choice!")
    proceed = false
    if((CHOICE.toLowerCase() == "rock") || (CHOICE.toLowerCase() == "scissors") || (CHOICE.toLowerCase() == "paper")){
        // proceed = true
        return CHOICE
        
    }else{
        return getHumanChoice()
    
    }
    while(!proceed){
    }
    
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
            alert("You dare draw with me human, WE GO AGAIN!\n" + "Human Score:  " + humanScore + "\nComputer score: " + computerScore)
            playerChoice = getHumanChoice().toLowerCase()
            computerChoice = getComputerChoice()
            playRound(playerChoice,computerChoice)
        }else if(playerChoice == "rock" && computerChoice == "scissors"){
            humanScore++
            alert("You win! "+playerChoice+" beats "+computerChoice + "\nHuman Score:  " + humanScore + "\nComputer score: " + computerScore)
            rounds++
        }else if(playerChoice == "paper" && computerChoice == "rock"){
            humanScore++
            alert("You win! "+playerChoice+" beats "+computerChoice + "\nHuman Score:  " + humanScore + "\nComputer score: " + computerScore)
            rounds++
        }else if(playerChoice == "scissors" && computerChoice == "paper"){
            humanScore++
            alert("You win! "+playerChoice+" beats "+computerChoice + "\nHuman Score:  " + humanScore + "\nComputer score: " + computerScore)
            rounds++
        }else{
            computerScore++;
            alert("You Lose! "+computerChoice+" beats "+playerChoice + "\nHuman Score:  " + humanScore + "\nComputer score: " + computerScore)
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

