let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    let promptValue = prompt("What's it going to be? Rock, Paper, or Scissors: ").toLowerCase().trim();
    return promptValue;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'Tie!';
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')) {
        humanScore += 1;
        return `You won this round! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore += 1
        return `You lost this round! ${computerChoice} beats ${humanChoice}.`;
    }
}

function playGame() {
    for(let round = 0; round < 5; round++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let roundResult = playRound(humanChoice, computerChoice);

        console.log(roundResult)
        console.log(`Human Score:` + humanScore)
        console.log(`Computer Score:` + computerScore)
        console.log('----------------')
    }
    console.log(`The final score: You: ${humanScore} vs Computer: ${computerScore}`)
    console.log(winner(humanScore, computerScore))
}

function winner(finalHumanScore, finalComputerScore) {
    if (finalHumanScore === finalComputerScore) {
        return 'It was a tie!'
    } else if (finalHumanScore > finalComputerScore) {
        return 'You won the game!'
    } else {
        return 'You loss the game!'
    }
}

// function validChoiceChecker(humanChoice) {
//     if (humanChoice != 'rock' || humanChoice != 'paper' || humanChoice != 'scissors') {
//         alert('Please enter rock, paper, or scissors:');
//         getHumanChoice();
//     }
// }

playGame();