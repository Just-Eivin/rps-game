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
        return "TIE";
    }

    switch (playerShape) {

        case "ROCK":
            if (computerShape == "SCISSORS") {
                return "WIN";
            }
            else {
                return "LOSE";
            }
            break;

        case "PAPER":
            if (computerShape == "ROCK") {
                return "WIN";
            }
            else {
                return "LOSE";
            }
            break;

        case "SCISSORS":
            if (computerShape == "PAPER") {
                return "WIN";
            }
            else {
                return "LOSE";
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
            return '✊';
        case 'PAPER':
            return '🖐';
        case 'SCISSORS':
            return '✌';
    }
}

function resetAnim(){
    const animElements = document.querySelectorAll('.scale-up-center');

    animElements.forEach(animElement => {
        animElement.addEventListener('animationend', () => {
            animElement.classList.remove('scale-up-center')
        });
    });
}


function playGame() {
    function resetSelection () {
        shapeButtons.forEach((button) => {
            button.classList.remove('selected-button')
            selectedShape = undefined;
        });
    }

    function sendToLog(playerShape, computerShape, matchResult, round) {
        matchLog.textContent +=`Round ${round}:\nYou picked ${playerShape} and the computer picked ${computerShape}. \nYou ${matchResult}.\n\n`;
        logDiv.scrollTop = logDiv.scrollHeight;
    }

    function playRound(playerShape) {
        const computerShape = getComputerShape();
        const result = compareShapes(playerShape, computerShape);
        playerShapeDisplay.textContent = getEmoji(playerShape);
        computerShapeDisplay.textContent = getEmoji(computerShape);
        playerShapeDisplay.classList.add('scale-up-center');
        computerShapeDisplay.classList.add('scale-up-center');

        switch (result) {
            case "WIN":
                playerScore++;
                playerScoreCounter.textContent = playerScore;
                round++;
                sendToLog(playerShape, computerShape, result, round);
                resetAnim();
                resetSelection();
                break;
            case "TIE":
                round++;
                sendToLog(playerShape, computerShape, result, round);
                resetAnim();
                resetSelection();
                break;
            case "LOSE":
                computerScore++;
                computerScoreCounter.textContent = computerScore;
                round++;
                sendToLog(playerShape, computerShape, result, round);
                resetAnim();
                resetSelection();
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
    const matchLog = document.querySelector('#log-text');
    const logDiv = document.querySelector('#match-log');

    let selectedShape;
    let round = 0;
    let playerScore = 0, computerScore = 0;

    shapeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            shapeButtons.forEach((button) => {
                button.classList.remove('selected-button')
            });
            selectedShape = button.id;
            button.classList.add('selected-button')
        });
    });

    playButton.addEventListener('click', () => {
        if(selectedShape == "ROCK" || selectedShape == "PAPER" || selectedShape == "SCISSORS"){
            playRound(selectedShape);
        } else alert("You have to choose a shape, before you can play.");
    })




}



playGame();


