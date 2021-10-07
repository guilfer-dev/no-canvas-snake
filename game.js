document.addEventListener('keydown', game);

function game(e) {
    e.preventDefault();
    clearInterval(interval);
    lastKeyPressed = walk(e.key);

}

function setup() {
    setupField();
    setInitialtHeadPosition()
    foodLocation = spawnFood();

}

setup();