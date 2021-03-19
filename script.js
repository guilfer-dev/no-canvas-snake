let gameStatus = true;
const pixels = [];
let path = [];
let body = [];
let dx = 0;
let dy = 0;


document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    game(keyName);

});

function setupField() {
    const field = document.createElement('div');
    field.id = 'game-container';
    document.body.appendChild(field);
    for (let y = 0; y < 800; y += 40) {
        for (let x = 0; x < 800; x += 40) {
            const pixel = document.createElement('div');
            pixel.className = 'pixel field';
            pixel.id = `${x}&${y}`;
            pixels.push(pixel.id);
            field.appendChild(pixel);
        }
    }
}

function toCoordenate(pixelId) {
    const x = Number(pixelId.substring(0, pixelId.indexOf('&')));
    const y = Number(pixelId.substring(pixelId.indexOf('&') + 1));

    return {
        x,
        y
    };
}

function toId(x, y) {
    return `${x}&${y}`
}

function randomPixel() {
    return pixels[Math.floor(Math.random() * pixels.length)];
}

function spawnFood() {
    let i;
    do {
        i = randomPixel();
    } while (i === path[path.length - 1]);
    document.getElementById(i).className = 'pixel food';
    return i;
}

function setInitialtHeadPosition() {
    const i = randomPixel();
    path.push(toCoordenate(i));
    document.getElementById(i).className = 'pixel player';
    return i;
}

let interval;
function walk(keyName) {

    switch (keyName) {

        case 'ArrowRight': {
            dx = 40;
            dy = 0;
            break;
        }
        case 'ArrowLeft': {
            dx = -40;
            dy = 0;
            break;
        }
        case 'ArrowUp': {
            dx = 0;
            dy = -40;
            break;
        }
        case 'ArrowDown': {
            dx = 0;
            dy = 40;
            break;
        }
        default: break;
    }

    interval = setInterval(
        () => {
            const { x, y } = path[path.length - 1];
            document.getElementById(toId(x, y)).className = 'pixel field';

            const newPosition = {
                x: x + dx,
                y: y + dy
            };

            if (isDead(newPosition.x, newPosition.y)) {
                clearInterval(interval);
                alert('Game Over'),
                    location.reload()

            } else {
                path.push(newPosition)
                document.getElementById(toId(newPosition.x, newPosition.y)).className = 'pixel player';
            }
        }, 100);

    return undefined;
}

function isDead(x, y) {
    if (x < 0 ||
        x > 760 ||
        y < 0 ||
        y > 760)
        return true;
    else return false;
}

function game(keyName) {

    clearInterval(interval);
    walk(keyName);

}

function setup() {
    setupField();
    setInitialtHeadPosition()
    spawnFood();

}

setup();
