function setInitialtHeadPosition() {
    const i = randomPixel();
    path.push(toCoordenate(i));
    scoreAndBodyLength.push(100);
    setBodyPosition();
    return i;
}

function setBodyPosition() {

    bodyPosition = path.slice(-scoreAndBodyLength.length);
    cleanfield = path.slice(0, path.length - scoreAndBodyLength.length);

    cleanfield.forEach(
        (e) => {
            let id = toId(e.x, e.y);
            if (id !== foodLocation) document.getElementById(id).className = 'pixel field';
        });
        
    bodyPosition.forEach(
        (e) => {
            document.getElementById(toId(e.x, e.y)).className = 'pixel player';
        });
}

function isDead(x, y) {
    if (x < 0 ||
        x > 760 ||
        y < 0 ||
        y > 760)
        return true;
    else return false;
}
