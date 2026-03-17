const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultText = document.getElementById("result");

const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");

const resetButton = document.getElementById("reset");

let playerScore = 0;
let computerScore = 0;


rockButton.addEventListener("click", function() {
    playRound("rock");
});

paperButton.addEventListener("click", function() {
    playRound("paper");
});

scissorsButton.addEventListener("click", function() {
    playRound("scissors");
});

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        resultText.textContent = "Tie! Both chose " + playerChoice;
        return;
    }

    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        resultText.textContent = "You win! " + playerChoice + " beats " + computerChoice;
    } else {
        computerScore++;
        resultText.textContent = "Computer wins! " + computerChoice + " beats " + playerChoice;
    }

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

resetButton.addEventListener("click", function() {
    playerScore = 0;
    computerScore = 0;

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    resultText.textContent = "Score reset. Play again!";
});