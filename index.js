const playertext = document.querySelector("#player");
const comptext = document.querySelector("#comp");
const resulttext = document.querySelector("#resulttext");
const buttons = document.querySelectorAll(".btn");
const round = document.querySelector(".round");
const result = document.querySelector(".result");

let player;
let computer;
let compscore = 0;
let playerscore = 0;
let roundCount = 0; // Initiate round counter
let playerWins = 0;
let compwins = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        player = button.textContent;
        computerturn();
        playertext.textContent = `Player: ${player}`;
        comptext.textContent = `Computer: ${computer}`;
        round.textContent = `Round: ${roundCount}`;
        checkwinner();

        if (checkwinner() === "YOU WIN") {
            playerWins++;
            resulttext.textContent = `Player score = ${playerWins} Computer score = ${compwins}`
            roundCount++; // Increment round counter
        }

        else if (checkwinner() === "DRAW") {
            resulttext.textContent = `Player score = ${playerWins} Computer score = ${compwins}`
        }

        else {
            compwins++;
            resulttext.textContent = `Player score = ${playerWins} Computer score = ${compwins}`
            roundCount++; // Increment round counter
        }

        if (roundCount === 5) { // Check if all rounds are played
            if (playerWins >= 3) {
                result.textContent = `Result: YOU WIN !!!`;
            } else {
                result.textContent = `Result: YOU LOSE....`;
            }
        }
    });
});


function computerturn() {
    const random = Math.floor(Math.random() * 3) + 1;

    switch (random) {
        case 1:
            computer = "ROCK";
            break;

        case 2:
            computer = "PAPER";
            break;

        case 3:
            computer = "SCISSORS";
            break;
    }
}

function checkwinner() {
    if (player == computer) {
        return "DRAW";
    } else if (computer == "ROCK") {
        return (player == "PAPER") ? "YOU WIN" : "YOU LOSE";
    } else if (computer == "PAPER") {
        return (player == "SCISSORS") ? "YOU WIN" : "YOU LOSE";
    } else if (computer == "SCISSORS") {
        return (player == "ROCK") ? "YOU WIN" : "YOU LOSE";
    }
}
