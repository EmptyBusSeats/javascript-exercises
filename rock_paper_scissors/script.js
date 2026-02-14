function getComputerChoice() {
    randomNum = Math.random();
    if (randomNum < 0.333){
        return "rock";
    }
    else if (randomNum >= 0.333 && randomNum < 0.666){
        return "paper";
    } 
    else {
        return "scissors";
    }
}

function getHumanChoice() { 
    input = window.prompt("Please pick rock, paper, or scissors");
    invalidInputLoop: while (true){
        if (input.toLowerCase() === "rock" || input.toLowerCase() === "paper" || input.toLowerCase() === "scissors"){
            break invalidInputLoop;
        }
        else {
            input = window.prompt("Invalid input. Please pick rock, paper, or scissors");
            continue;
        }
        
    }
    return input.toLowerCase();       
}

function playRound() {
    humanInput = getHumanChoice();
    computerInput = getComputerChoice();
    switch (true) {
        case (humanInput === "rock" && computerInput === "rock"):
            console.log("Tie! Rock & rock.");
            break;
        case (humanInput === "rock" && computerInput === "paper"):
            console.log("Computer wins! Rock & paper.");
            computerScore += 1;
            break;
        case (humanInput === "rock" && computerInput === "Scissors"):
            console.log("Player wins! Rock & scissors.");
            humanScore += 1;
            break;
        case (humanInput === "paper" && computerInput === "rock"):
            console.log("Player wins! Paper & rock.");
            humanScore += 1;
            break;
        case (humanInput === "paper" && computerInput === "paper"):
            console.log("Tie! Paper & paper.");
            break;
        case (humanInput === "paper" && computerInput === "scissors"):
            console.log("Computer wins! Paper & scissors.");
            computerScore += 1;
            break;
        case (humanInput === "scissors" && computerInput === "rock"):
            console.log("Computer wins! Scissors & rock.");
            computerScore += 1;
            break;
        case (humanInput === "scissors" && computerInput === "paper"):
            console.log("Player wins! Scissors & paper.");
            humanScore += 1;
            break;
        case (humanInput === "scissors" && computerInput === "scissors"):
            console.log("Tie! Scissors & scissors.");
            break;
    }
    return;
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log('\n\nThe score is:\nHuman: ' + humanScore + '\nComputer: ' + computerScore);
    }
    if (humanScore > computerScore){
        console.log("\n Player wins! Congratulations!");
    }
    else if (computerScore > humanScore){
        console.log("\n Computer wins! Better luck next time!");
    }
    else {
        console.log("Tie game! Break even!")
    }
}
let humanScore = 0;
let computerScore = 0;
playGame();


