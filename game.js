document.addEventListener('keydown', game);

function game(e) {

    clearInterval(interval);
    walk(e.key);

}

function updateScore() {
    const score = scoreAndBodyLength.reduce((acc, el) => acc + el)
    document.getElementById('score').innerHTML = `Score: ${score -100}pts`
}

function setup() {
    setupField();
    setInitialtHeadPosition()
    foodLocation = spawnFood();

}

setup();
