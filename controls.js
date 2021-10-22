let interval;

function updateScore() {
    const score = scoreAndBodyLength.reduce((acc, el) => acc + el);
    document.getElementById('score').innerHTML = `${score - 100}`;
}

function walk(keyName) {

    let opositykey;

    switch (keyName) {

        case 'ArrowRight': {
            opositykey = 'ArrowLeft';
            if (keyName === lastKeyPressed ||
                lastKeyPressed === opositykey) break;
            else {
                dx = 40;
                dy = 0;
                break;
            }
        }
        case 'ArrowLeft': {
            opositykey = 'ArrowRight';
            if (keyName === lastKeyPressed ||
                lastKeyPressed === opositykey) break;
            else {
                dx = -40;
                dy = 0;
                break;
            }
        }
        case 'ArrowUp': {
            opositykey = 'ArrowDown';
            if (keyName === lastKeyPressed ||
                lastKeyPressed === opositykey) break;
            else {
                dx = 0;
                dy = -40;
                break;
            }
        }
        case 'ArrowDown': {
            opositykey = 'ArrowUp';
            if (keyName === lastKeyPressed ||
                lastKeyPressed === opositykey) break;
            else {
                dx = 0;
                dy = 40;
                break;
            }
        }
        default: break;
    }

    interval = setInterval(
        () => {
            const { x, y } = path[path.length - 1];

            const newPosition = {
                x: x + dx,
                y: y + dy
            };

            let newPositionId = toId(newPosition);

            if (isDead(newPosition)) {
                clearInterval(interval);
                alert('Game Over');
                location.reload();

            } else {
                path.push(newPosition);
                setBodyPosition();
            }

            if (foodLocation === newPositionId) {
                foodLocation = spawnFood();
                scoreAndBodyLength.push(100);
                updateScore();
            }
        }, 100);

    return keyName;
}