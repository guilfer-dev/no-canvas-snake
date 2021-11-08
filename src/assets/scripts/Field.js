import randomPixel from "../helpers/randomPixel.js";
import toCoordenate from "../helpers/toCoordenate.js";
import toId from "../helpers/toId.js";
import Snake from "./Snake.js";

export default class Field extends Snake {

    constructor(pixels) {
        super(pixels)
        this.pixels = pixels;
    }

    direction = {
        x: 0,
        y: 0,
    }

    foodLocation = '';

    setup() {
        const field = document.getElementById('game-container');
        for (let y = 0; y < 800; y += 40) {
            for (let x = 0; x < 800; x += 40) {
                const pixel = document.createElement('div');
                pixel.className = 'pixel field';
                pixel.id = `${x}&${y}`;
                this.pixels.push(pixel.id);
                field.appendChild(pixel);
            }
        }
        this.spawnFood();
        this.spawnSnake();
    }

    renderSnakeBody(position) {

        this.body.push(position);

        let field = this.body.slice(0, this.size);
        this.body = this.body.slice(-this.size);

        field.forEach(e => {
            document.getElementById(e).className = 'pixel field';
        })

        this.body.forEach(e => {
            document.getElementById(e).className = 'pixel player';
        })

    }

    spawnFood() {
        let i = '';
        do {
            i = randomPixel(this.pixels);
            console.log(i);
        }
        while (this.body.includes(i));

        this.foodLocation = i;
        document.getElementById(i).className = 'pixel food';
    }
}

