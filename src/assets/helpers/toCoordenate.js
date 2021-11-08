export default function toCoordenate(id) {
    const x = Number(id.substring(0, id.indexOf('&')));
    const y = Number(id.substring(id.indexOf('&') + 1));

    return {
        x,
        y
    };
}