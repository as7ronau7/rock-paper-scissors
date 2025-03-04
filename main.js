let humanScore = 0;
let computerScore = 0;

const playerScoreElement = document.querySelector('#player-score');
const computerScoreElement = document.querySelector('#computer-score');
const btnElement = document.querySelectorAll('button');
const resultsElement = document.querySelector('#results');

btnElement.forEach((button) => {
    button.addEventListener('click', function() {
        let playerChoice = button.textContent.toLowerCase();
        console.log(playerChoice)
        console.log(playRound(playerChoice, getComputerChoice()))
    })
})

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        resultsElement.textContent = 'It is a Tie!';
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')) {
        humanScore += 1;
        resultsElement.textContent = `You won this round! ${humanChoice} beats ${computerChoice}.`;
        playerScoreElement.textContent = humanScore;
    } else {
        computerScore += 1
        resultsElement.textContent =  `You lost this round! ${computerChoice} beats ${humanChoice}.`;
        computerScoreElement.textContent = computerScore;
    }
    console.log(humanScore, computerScore)
    console.log(winner(humanScore, computerScore))
}

function winner(finalHumanScore, finalComputerScore) {
    if (finalHumanScore === 5) {
        resultsElement.textContent = 'You Won the game!';
    } else if (finalComputerScore === 5) {
        resultsElement.textContent = 'You lost the game!';
    } else {
        console.log('Continue to play the game');
    }
}