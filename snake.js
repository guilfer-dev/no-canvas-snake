function setInitialtHeadPosition() {
    const i = randomPixel();
    path.push(toCoordenate(i));
    document.getElementById(i).className = 'pixel player';
    return i;
}



function isDead(x, y) {
    if (x < 0 ||
        x > 760 ||
        y < 0 ||
        y > 760)
        return true;
    else return false;
}
