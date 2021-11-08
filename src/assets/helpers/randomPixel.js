export default function randomPixel(pixels) {
    return pixels[Math.floor(Math.random() * pixels.length)];
}