function setupField() {
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

function randonPixel() {
    return pixels[Math.floor(Math.random() * pixels.length + 1)].toString();
}

function setInitialPosition() {
    const i = randonPixel();
    document.getElementById(i).className = 'pixel player';
    return i;
}

function walk(dx, dy) {
    const currentPosition = path[path.length - 1] || initialPosition;

    const x = Number(currentPosition.substring(0, currentPosition.indexOf('&')));
    const y = Number(currentPosition.substring(currentPosition.indexOf('&') + 1));
    const newPosition = `${x + dx}&${y + dy}`;

    document.getElementById(currentPosition).className = 'pixel field';
    path.push(newPosition);

    return newPosition;
}


const field = document.getElementById('game-container');
const pixels = [];
const path = [];
setupField();
const initialPosition = setInitialPosition();

document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    switch (keyName) {
        case 'ArrowUp': {
            document.getElementById(walk(0, -40)).className = 'pixel player';
            break;
        }
        case 'ArrowRight': {
            document.getElementById(walk(40, 0)).className = 'pixel player';
            break;
        }
        case 'ArrowDown': {
            document.getElementById(walk(0, 40)).className = 'pixel player';
            break;
        }
        case 'ArrowLeft': {
            document.getElementById(walk(-40, 0)).className = 'pixel player';
            break;
        }
        default: console.log('Tecla invalida')
    }

});