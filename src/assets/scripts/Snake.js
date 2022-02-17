
import randomPixel from "../helpers/randomPixel.js";
import toCoordenate from "../helpers/toCoordenate.js";

export default class Snake {

    constructor(pixels) {
        this.pixels = pixels;
        this.body = [];
        this.size = 1;
    }

    spawn() {
        const i = randomPixel(this.pixels);
        this.body.push(i);
        document.getElementById(i).className = 'pixel player';
        this.spawn = undefined;
    }

    grow() {
        this.size++;
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

    renderBody(position) {

        this.body.push(position);

        let field = this.body.slice(0, this.size);
        this.body = this.body.slice(-this.size);

        field.forEach(e => {
            document.getElementById(e).className = 'pixel field';
        })

        this.body.forEach((e, i) => {
            if (i !== this.body.length - 1) {
                document.getElementById(e).className = 'pixel player';
            } else {
                document.getElementById(e).className = 'pixel player-head';
            }
        })

    }

}


