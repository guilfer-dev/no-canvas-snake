function toCoordenate(pixelId) {
    const x = Number(pixelId.substring(0, pixelId.indexOf('&')));
    const y = Number(pixelId.substring(pixelId.indexOf('&') + 1));

    return {
        x,
        y
    };
}