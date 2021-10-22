document.addEventListener('keydown', game);


function setupTouchControlls() {
    const touchControlls = document.getElementsByTagName("button");
    touchControlls[0].addEventListener('click', game);
    touchControlls[1].addEventListener('click', game);
    touchControlls[2].addEventListener('click', game);
    touchControlls[3].addEventListener('click', game);
}

function game(e) {
    e.preventDefault();
    clearInterval(interval);
    if (e.type === 'click') {
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