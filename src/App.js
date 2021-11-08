import Controls from "./assets/scripts/Controls.js";
import Field from "./assets/scripts/Field.js";
import toId from "./assets/helpers/toId.js";
import toCoordenate from "./assets/helpers/toCoordenate.js";

export default class App extends Field {

    constructor() {
        super();
        this.pixels = [];
    }

    score = 0;
    controls = new Controls(this.direction);


    setupGame() {
        this.controls.setup();
        this.setup();
    }

    game() {
        clearInterval(this.renderNext);
    }

    updateScore() {
        this.score = this.body.length * 100;
        document.getElementById('score').innerHTML = `${this.score}`;
    }

    renderNext = setInterval(
        () => {

            const position = toCoordenate(this.body[this.body.length - 1]);

            const x = position.x + this.direction.x;
            const y = position.y + this.direction.y;

            const newPosition = toId({ x, y })

            if (this.isDead(newPosition)) {
                clearInterval(this.renderNext);
                const highscore = localStorage.getItem('highscore');
                if (this.score > highscore) {
                    localStorage.setItem('highscore', this.score);
                    alert('HighScore!!!');
                } else {
                    alert('Game Over!');
                }
                location.reload();
            } else {
                if (this.foodLocation === newPosition) {
                    this.spawnFood();
                    this.size++;
                    this.updateScore();
                }
                this.renderSnakeBody(newPosition);
            }

        }, 100);
}





