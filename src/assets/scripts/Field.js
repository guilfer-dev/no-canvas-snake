import randomPixel from "../helpers/randomPixel.js";
export default class Field {

    constructor(pixels, snake) {
        this._pixels = pixels;
        this._snake = snake;
        this._foodLocation = '';
    }

    setup() {
        const field = document.getElementById('game-container');
        for (let y = 0; y < 800; y += 40) {
            for (let x = 0; x < 800; x += 40) {
                const pixel = document.createElement('div');
                pixel.className = 'pixel field';
                pixel.id = `${x}&${y}`;
                this._pixels.push(pixel.id);
                field.appendChild(pixel);
            }
        }
        return;
    }

    spawnFood() {
        let i = '';
        do {
            i = randomPixel(this._pixels);
        }
        while (this._snake.body.includes(i));

        document.getElementById(i).className = 'pixel food';
        this._foodLocation = i;
        return i;
    }

    get foodLocation() {
        return this._foodLocation;
    }
}

