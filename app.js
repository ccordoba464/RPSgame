const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  let computerScore = document.getElementById("cpu-score");
  let userScore = document.getElementById("user-score");

  if (computerScore.textContent === "5" || userScore.textContent === "5") {
    computerScore.textContent = 0;
    userScore.textContent = 0;
  }

  switch (playerSelection.toLowerCase()) {
    case "rock":
      if (computerSelection.toLowerCase() === "paper") {
        updateScore("cpu-score");
        updateResult("You Lose! Paper beats Rock");
      } else if (computerSelection.toLowerCase() === "rock") {
        updateResult("Try again! Same choice");
      } else {
        updateScore("user-score");
        updateResult("You Win! Rock beats Scissors");
      }
      break;
    case "paper":
      if (computerSelection.toLowerCase() === "paper") {
        updateResult("Try again! Same choice");
      } else if (computerSelection.toLowerCase() === "rock") {
        updateScore("user-score");
        updateResult("You Win! Paper beats Rock");
      } else {
        updateScore("cpu-score");
        updateResult("You Lose! Scissors beats Paper");
      }
      break;

    case "scissors":
      if (computerSelection.toLowerCase() === "paper") {
        updateScore("user-score");
        updateResult("You Win! Scissors beats Paper");
      } else if (computerSelection.toLowerCase() === "rock") {
        updateScore("cpu-score");
        updateResult("You Lose! Rock beats Scissors");
      } else {
        updateResult("Try again! Same choice");
      }
      break;
  }

  let result = document.getElementById("outcome");
  if (computerScore.textContent == "5") {
    result.textContent = "CPU is the winner!";
  } else if (userScore.textContent == "5") {
    result.textContent = "You are the winner!";
  }
}

function updateScore(winner) {
  let winnerScore = document.getElementById(winner);
  let currentScore = +winnerScore.textContent;
  let newScore = currentScore + 1;
  winnerScore.textContent = newScore;
}

function updateResult(outcome) {
  let result = document.getElementById("outcome");
  result.textContent = outcome;
}

/* Event Listeners */

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    playRound(button.textContent);
  });
});
