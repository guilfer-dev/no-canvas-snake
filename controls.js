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
                path.push(newPosition)
                document.getElementById(toId(newPosition.x, newPosition.y)).className = 'pixel player';
            }
        }, 100);

    return undefined;
}