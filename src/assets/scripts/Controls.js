export default class Controls {

    constructor(direction) {
        this.direction = direction;
    }

    lastKeyPressed = '';
    command = '';

    setup() {
        document.addEventListener('keydown', this.handleControls.bind(this, ...arguments));
        document.querySelectorAll(".d-pad").forEach(e => {
            e.addEventListener('mousedown', this.handleControls.bind(this, ...arguments));
        });
    }

    handleControls(e) {

        e.preventDefault();

        if (e.type === 'mousedown') {
            this.command = e.target.id;
        } else {
            this.command = e.key;
        }

        this.move();
    }

    move() {

        let oposity = '';

        switch (this.command) {

            case 'ArrowRight': {
                oposity = 'ArrowLeft';
                if (this.command === this.lastKeyPressed ||
                    this.lastKeyPressed === oposity) break;
                else {
                    this.direction.x = 40;
                    this.direction.y = 0;
                    break;
                }
            }
            case 'ArrowLeft': {
                oposity = 'ArrowRight';
                if (this.command === this.lastKeyPressed ||
                    this.lastKeyPressed === oposity) break;
                else {
                    this.direction.x = -40;
                    this.direction.y = 0;
                    break;
                }
            }
            case 'ArrowUp': {
                oposity = 'ArrowDown';
                if (this.command === this.lastKeyPressed ||
                    this.lastKeyPressed === oposity) break;
                else {
                    this.direction.x = 0;
                    this.direction.y = -40;
                    break;
                }
            }
            case 'ArrowDown': {
                oposity = 'ArrowUp';
                if (this.command === this.lastKeyPressed ||
                    this.lastKeyPressed === oposity) break;
                else {
                    this.direction.x = 0;
                    this.direction.y = 40;
                    break;
                }
            }
            default: break;
        }

        this.lastKeyPressed = this.command;

    }
}