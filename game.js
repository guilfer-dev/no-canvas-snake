document.addEventListener('keydown', game);

function game(e) {

    clearInterval(interval);
    walk(e.key);

}

function setup() {
    setupField();
    setInitialtHeadPosition()
    spawnFood();

}

setup();
