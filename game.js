document.addEventListener('keydown', game);


function setupTouchControlls() {
    const touchControlls = document.getElementsByTagName("button");
    touchControlls[0].addEventListener('mousedown', game);
    touchControlls[1].addEventListener('mousedown', game);
    touchControlls[2].addEventListener('mousedown', game);
    touchControlls[3].addEventListener('mousedown', game);
}

function game(e) {
    e.preventDefault();
    clearInterval(interval);
    if (e.type === 'mousedown') {
        lastKeyPressed = walk(e.target.id);
    } else {
        lastKeyPressed = walk(e.key);
    }
}

function setup() {
    setupField();
    setInitialtHeadPosition();
    setupTouchControlls();
    foodLocation = spawnFood();


}

setup();