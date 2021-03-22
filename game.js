document.addEventListener('keydown', game);

function game(e) {

    clearInterval(interval);
    lastKeyPressed = walk(e.key);

}

function setup() {
    setupField();
    setInitialtHeadPosition()
    foodLocation = spawnFood();

}

setup();