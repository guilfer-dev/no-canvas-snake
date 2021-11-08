
import randomPixel from "../helpers/randomPixel.js";
import toCoordenate from "../helpers/toCoordenate.js";

export default class Snake {

    constructor(pixels) {
        this.pixels = pixels;
    }

    body = [];
    size = 1;


    spawnSnake() {
        const i = randomPixel(this.pixels);
        this.body.push(i);
        document.getElementById(i).className = 'pixel player';
    }

    isDead(position) {
        const { x, y } = toCoordenate(position);

        if ((
            (this.body.includes(position))
            && this.body.length > 3)
            || x < 0
            || x > 760
            || y < 0
            || y > 760) {
            return true;
        }
        else {
            return false;
        };
    }

}


