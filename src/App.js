import Controls from "./scripts/Controls.js";
import Field from "./scripts/Field.js";
import Snake from "./scripts/Snake.js";
import toId from "./helpers/toId.js";
import toCoordenate from "./helpers/toCoordenate.js";

export default class App {

    _pixels = [];
    _controls = new Controls();
    _snake = new Snake(this._pixels);
    _field = new Field(this._pixels, this._snake);

    constructor() {
        this._score = 0;
        this._initialTimestamp;
        this._previousTimeStamp;
        this._gameOver = false;
    }

    setup() {
        this._field.setup();
        this._field.spawnFood();
        this._snake.spawn();
        this._controls.setup();
    }

    _updateScore() {
        this.score = this._snake.body.length * 100;
        document.getElementById('score').innerHTML = `${this.score}`;
    }

    gameLoop(timestamp) {

        const position = toCoordenate(this._snake.body[this._snake.body.length - 1]);
        const x = position.x + this._controls.direction.x;
        const y = position.y + this._controls.direction.y;


        if (((timestamp - this._previousTimeStamp >= 80) && !this._gameOver)
            || this._initialTimestamp === undefined
        ) {

            if (this._initialTimestamp === undefined) {
                this._initialTimestamp = timestamp;
            }

            this._previousTimeStamp = timestamp;

            const newPosition = toId({ x, y });

            if (this._snake.isDead(newPosition)) {

                const highscore = localStorage.getItem('highscore');

                if (this.score > highscore) {
                    localStorage.setItem('highscore', this.score);
                    alert('HighScore!!!');
                } else {
                    alert('Game Over!');
                }

                this._gameOver = true;
                location.reload();

            } else {
                if (this._field.foodLocation === newPosition) {
                    this._field.spawnFood();
                    this._snake.grow();
                    this._updateScore();
                }

                this._snake.renderBody(newPosition);
            }

        }

        window.requestAnimationFrame(this.gameLoop.bind(this));
        return;
    }
}





