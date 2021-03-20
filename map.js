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

function spawnFood() {
    let i;
    do {
        i = randomPixel();
    } while (i === path[path.length - 1]);
    document.getElementById(i).className = 'pixel food';
    return i;
}