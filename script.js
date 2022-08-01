function getRandom(range) {
    return Math.floor(Math.random() * (range + 1));
}

function getComputerShape() {
    const computerRandom = getRandom(2);

    switch (computerRandom) {
        case 0:
            return "ROCK";
            break;
        case 1:
            return "PAPER";
            break;
        case 2:
            return "SCISSORS";
            break;
    }
}

function compareShapes(playerShape, computerShape) {

    if (playerShape == computerShape) {
        return "tie";
    }

    switch (playerShape) {

        case "ROCK":
            if (computerShape == "SCISSORS") {
                return "win";
            }
            else {
                return "lose";
            }
            break;

        case "PAPER":
            if (computerShape == "ROCK") {
                return "win";
            }
            else {
                return "lose";
            }
            break;

        case "SCISSORS":
            if (computerShape == "PAPER") {
                return "win";
            }
            else {
                return "lose";
            }
            break;
    }
}

function game() {

    function playRound(playerShape, computerShape) {

        let matchResult = compareShapes(playerShape, computerShape);


        switch (matchResult) {
            case "win":
                playerScore++;
                console.log(`You picked ${playerShape} and the computer picked ${computerShape}. \nYou WIN.\nPlayer ${playerScore} - ${computerScore} Computer\n\n`);
                break;

            case "tie":
                console.log(`You picked ${playerShape} and the computer picked ${computerShape}. \nYou TIE.\nPlayer ${playerScore} - ${computerScore} Computer\n\n`);
                break;

            case "lose":
                computerScore++;
                console.log(`You picked ${playerShape} and the computer picked ${computerShape}. \nYou LOSE.\nPlayer ${playerScore} - ${computerScore} Computer\n\n`);
                break;
        }
    }

    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        let playerInput = prompt(`Round ${round}:\nChoose your shape.\nAvailable shapes: rock, paper, scissors.\n`).toUpperCase();
        let computerShape = getComputerShape();

        switch (playerInput) {

            case "ROCK":
                console.log(`%cROUND ${round}:`, 'font-weight: bold;');
                playRound(playerInput, computerShape);
                break;

            case "PAPER":
                console.log(`%cROUND ${round}:`, 'font-weight: bold;');
                playRound(playerInput, computerShape);
                break;

            case "SCISSORS":
                console.log(`%cROUND ${round}:`, 'font-weight: bold;');
                playRound(playerInput, computerShape);
                break;

            default:
                console.log(`%cERROR:`, 'font-weight: bold; color: red;');
                console.log(`You typed: ${playerInput}\nThis is an unallowed shape.\nYou can only choose rock, paper or scissors.`)
                round--;
        }
    }

    if (playerScore == computerScore) {
        console.log(`END OF THE GAME\nYour score is ${playerScore} and the computer's score is ${computerScore}. You tied.`)
    }
    else if (playerScore > computerScore) {
        console.log(`END OF THE GAME\nYour score is ${playerScore} and the computer's score is ${computerScore}. You won.`)
    }
    else {
        console.log(`END OF THE GAME\nYour score is ${playerScore} and the computer's score is ${computerScore}. You lost.`)
    }

}

game();