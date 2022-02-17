export default class Controls {


    constructor() {
        this._lastKeyPressed = '';
        this._command = '';
        this._direction = {
            x: 0,
            y: 0
        }
    }

    setup() {
        document.addEventListener('keydown', this._handleControls.bind(this, ...arguments));
        document.querySelectorAll(".d-pad").forEach(e => {
            e.addEventListener('mousedown', this._handleControls.bind(this, ...arguments));
        });
    }

    _handleControls(e) {

        e.preventDefault();

        if (e.type === 'mousedown') {
            this._command = e.target.id;
        } else {
            this._command = e.key;
        }

        this._move();
    }

    _move() {

        switch (this._command) {

            case 'ArrowRight': {
                const oposity = 'ArrowLeft';
                if (this._command === this._lastKeyPressed ||
                    this._lastKeyPressed === oposity) break;
                else {
                    this._direction.x = 40;
                    this._direction.y = 0;
                    break;
                }
            }
            case 'ArrowLeft': {
                const oposity = 'ArrowRight';
                if (this._command === this._lastKeyPressed ||
                    this._lastKeyPressed === oposity) break;
                else {
                    this._direction.x = -40;
                    this._direction.y = 0;
                    break;
                }
            }
            case 'ArrowUp': {
                const oposity = 'ArrowDown';
                if (this._command === this._lastKeyPressed ||
                    this._lastKeyPressed === oposity) break;
                else {
                    this._direction.x = 0;
                    this._direction.y = -40;
                    break;
                }
            }
            case 'ArrowDown': {
                const oposity = 'ArrowUp';
                if (this._command === this._lastKeyPressed ||
                    this._lastKeyPressed === oposity) break;
                else {
                    this._direction.x = 0;
                    this._direction.y = 40;
                    break;
                }
            }
            default: break;
        }

        this._lastKeyPressed = this._command;

        return;

    }

    get direction() {
        return this._direction;
    }
}