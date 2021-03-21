let interval;
function walk(keyName) {

    switch (keyName) {

        case 'ArrowRight': {
            dx = 40;
            dy = 0;
            break;
        }
        case 'ArrowLeft': {
            dx = -40;
            dy = 0;
            break;
        }
        case 'ArrowUp': {
            dx = 0;
            dy = -40;
            break;
        }
        case 'ArrowDown': {
            dx = 0;
            dy = 40;
            break;
        }
        default: break;
    }

    interval = setInterval(
        () => {
            const { x, y } = path[path.length - 1];
            let newPositionId;
            document.getElementById(toId(x, y)).className = 'pixel field';

            const newPosition = {
                x: x + dx,
                y: y + dy
            };

            if (isDead(newPosition.x, newPosition.y)) {
                clearInterval(interval);
                alert('Game Over'),
                    location.reload()

            } else {
                newPositionId = toId(newPosition.x, newPosition.y);
                path.push(newPosition);
                setBodyPosition();
            }

            if (foodLocation === newPositionId) {
                foodLocation = spawnFood();
                console.log(foodLocation);
                scoreAndBodyLength.push(100);
                updateScore();
            }
        }, 100);

    return undefined;
}