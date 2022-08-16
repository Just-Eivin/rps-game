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

