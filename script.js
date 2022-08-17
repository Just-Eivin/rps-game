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

function getPlayerShape(shape) {
    switch (shape) {
        case "🪨":
            return "ROCK";

        case "📜":
            return "PAPER";

        case "✂️":
            return "SCISSORS";

        default:
            return null;
    }
}

function getEmoji(textShape) {
    switch (textShape) {
        case 'ROCK':
            return '🪨';
        case 'PAPER':
            return '📜';
        case 'SCISSORS':
            return '✂️';
    }
}

function playGame() {
    function playRound(playerShape) {
        const computerShape = getComputerShape();
        const result = compareShapes(playerShape, computerShape);
        playerShapeDisplay.textContent = getEmoji(playerShape);
        computerShapeDisplay.textContent = getEmoji(computerShape);

        switch (result) {
            case "win":
                playerScore++;
                playerScoreCounter.textContent = playerScore;
                console.log(`You picked ${playerShape} and the computer picked ${computerShape}. \nYou WIN.`);
                break;
            case "tie":
                console.log(`You picked ${playerShape} and the computer picked ${computerShape}. \nYou TIE.`);
                break;
            case "lose":
                computerScore++;
                computerScoreCounter.textContent = computerScore;
                console.log(`You picked ${playerShape} and the computer picked ${computerShape}. \nYou LOSE.`);
                break;
            default:
                alert(`error`);
                break;
        }
    }

    const shapeButtons = document.querySelectorAll('.shape-button');
    const playButton = document.querySelector('#play-button')
    const playerScoreCounter = document.querySelector('#player-score');
    const computerScoreCounter = document.querySelector('#comp-score');
    const playerShapeDisplay = document.querySelector('#player-display');
    const computerShapeDisplay = document.querySelector('#computer-display');
    let selectedShape;
    let playerScore = 0, computerScore = 0;

    shapeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            selectedShape = button.id;
        });
    });

    playButton.addEventListener('click', () => {
        if(selectedShape == "ROCK" || selectedShape == "PAPER" || selectedShape == "SCISSORS"){
            playRound(selectedShape);
        } else alert("You have to choose a shape, before you can play.");
    })




}



playGame();


